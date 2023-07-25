/**
 * Copyright reelyActive 2021-2023
 * We believe in an open Internet of Things
 */


let charlotte = (function() {

  // Internal constants
  const MAX_EXPECTED_RSSI = -30;
  const DEFAULT_LAYOUT_NAME = 'fcose';
  const DEFAULT_FCOSE_LAYOUT_OPTIONS = {
      name: "fcose",
      quality: "default",
      animate: true,
      animationDuration: 1600,
      randomize: true,
      idealEdgeLength: (edge) => {
        return Math.max(1, MAX_EXPECTED_RSSI - edge.data('rssi'));
      },
      padding: 24,
      fixedNodeConstraint: []
  };
  const DEFAULT_GRAPH_STYLE = [
      { selector: "node",
        style: { label: "data(name)", "font-size": "0.6em", "color": "#666",
                 "min-zoomed-font-size": "16px" } },
      { selector: "node[image]",
        style: { "background-image": "data(image)", "border-color": "#83b7d0",
                 "background-fit": "cover cover", "border-width": "2px" } },
      { selector: "edge", style: { "curve-style": "haystack",
                                   "line-color": "#ddd", label: "data(name)",
                                   "text-rotation": "autorotate",
                                   color: "#5a5a5a", "font-size": "0.25em",
                                   "min-zoomed-font-size": "12px" } },
      { selector: ".cyDeviceNode",
        style: { "background-color": "#83b7d0", "border-color": "#83b7d0" } },
      { selector: ".cyAnchorNode",
        style: { "background-color": "#0770a2", "border-color": "#0770a2" } },
      { selector: ".cySelectedNode",
        style: { "background-color": "#ff6900", "border-color": "#ff6900" } }
  ];

  // Internal variables
  let cy;
  let layout;
  let options;
  let devicesProperties;


  // Spin a web
  function spin(devices) {
    let deviceSignatures = Object.keys(devices);

    cy.nodes().forEach((node) => {
      let isPresent = deviceSignatures.includes(node.id());
      if(!isPresent) { cy.remove(node); }
    });

    options.layout.fixedNodeConstraint = [];

    for(const deviceSignature in devices) {
      addDeviceNode(deviceSignature, devices[deviceSignature]);
    }

    fitConstraintToViewport();
    updateLayout();
  }


  // Initialise the web
  function init(container, devicesPropertiesMap, layoutName, layoutOptions,
                style) {
    devicesProperties = devicesPropertiesMap || new Map();
    options = {
        container: container,
        layout: layoutOptions ||
                Object.assign({}, DEFAULT_FCOSE_LAYOUT_OPTIONS),
        style: style || DEFAULT_GRAPH_STYLE
    };

    cy = cytoscape(options);
    layout = cy.layout({ name: layoutName || DEFAULT_LAYOUT_NAME, cy: cy });
    cy.on('resize', updateLayout);
  }


  // Add a device node to the hyperlocal context graph
  function addDeviceNode(deviceSignature, device) {
    let properties = devicesProperties.get(deviceSignature) || {};
    let isExistingNode = (cy.getElementById(deviceSignature).size() > 0);

    if(!isExistingNode) {
      cy.add({ group: "nodes", data: { id: deviceSignature } });
    }

    let node = cy.getElementById(deviceSignature);
    let nodeClass = isAnchor(device) ? 'cyAnchorNode' : 'cyDeviceNode';
    node.data('name', properties.title || '');
    node.addClass(nodeClass);
    if(isAnchor(device)) {
      let position = { x: device.position[0],  y: device.position[1] };
      options.layout.fixedNodeConstraint.push({ nodeId: deviceSignature,
                                                position: position });
    }
    if(properties.imageUrl) { node.data('image', properties.imageUrl); }
    addDeviceEdges(deviceSignature, device);
  }


  // Add device edges to the hyperlocal context graph
  function addDeviceEdges(deviceSignature, device) {
    let edgeSignatures = [];

    if(device.hasOwnProperty('nearest')) {
      device.nearest.forEach(function(entry) {
        let peerSignature = entry.device;
        let edgeSignature = deviceSignature + '@' + peerSignature;
        let edge = cy.getElementById(edgeSignature);
        let isExistingEdge = (edge.size() > 0);
        isExistingNode = (cy.getElementById(peerSignature).size() > 0);
        edgeSignatures.push(edgeSignature);

        if(!isExistingNode) {
          cy.add({ group: "nodes", data: { id: peerSignature } });
        }
        if(!isExistingEdge) {
          cy.add({ group: "edges", data: { id: edgeSignature,
                                           source: deviceSignature,
                                           target: peerSignature,
                                           name: entry.rssi + "dBm",
                                           rssi: entry.rssi } });
        }
        else {
          edge.data({ name: entry.rssi + "dBm", rssi: entry.rssi });
        }
      });
    }

    cy.elements('edge[id^="' + deviceSignature + '@"]').forEach(function(edge) {
      let isPresent = edgeSignatures.includes(edge.id());
      if(!isPresent) { cy.remove(edge); }
    });
  }


  // Determine if the given device is an anchor with valid x and y position
  function isAnchor(device) {
    return device.hasOwnProperty('position') &&
           Array.isArray(device.position) &&
           (device.position.length >= 2) &&
           (typeof device.position[0] === 'number') &&
           (typeof device.position[1] === 'number');
  }


  // Fit the fixedNodeConstraint to the dimensions of the viewport
  function fitConstraintToViewport() {
    if(options.layout.fixedNodeConstraint.length <= 1) {
      return;
    }

    let viewportWidth = cy.width();
    let viewportHeight = cy.height();
    let minX = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;

    options.layout.fixedNodeConstraint.forEach((constraint) => {
      if(constraint.position.x < minX) { minX = constraint.position.x; }
      if(constraint.position.x > maxX) { maxX = constraint.position.x; }
      if(constraint.position.y < minY) { minY = constraint.position.y; }
      if(constraint.position.y > maxY) { maxY = constraint.position.y; }
    });

    let offsetX = 0 - minX;
    let offsetY = 0 - maxY;
    let ratioX = (maxX - minX) / viewportWidth;
    let ratioY = (minY - maxY) / viewportHeight;

    options.layout.fixedNodeConstraint.forEach((constraint) => {
      constraint.position.x += offsetX;
      if(ratioX !== 0) { constraint.position.x /= ratioX; }
      constraint.position.y += offsetY;
      if(ratioY !== 0) { constraint.position.y /= ratioY; }
    });
  }


  // Update the layout
  function updateLayout() {
    layout.stop();
    layout = cy.elements().makeLayout(options.layout);
    layout.run();
  }


  // Expose the following functions and variables
  return {
    spin: spin,
    init: init
  }

}());
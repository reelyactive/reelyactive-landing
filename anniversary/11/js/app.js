/**
 * Copyright reelyActive 2023
 * We believe in an open Internet of Things
 */


// Constant definitions
const HLC_MIN_HEIGHT_PX = 480;
const HLC_UNUSABLE_HEIGHT_PX = 120;
const SIGNATURE_SEPARATOR = '/';

// Other variables
let devicePropertiesMap = new Map();

// Initialisation
setContainerHeight();
charlotte.init(document.getElementById('cy'), devicePropertiesMap);
poll();
setInterval(poll, 5000);


// Set the height of the graph container
function setContainerHeight() {
  let container = document.getElementById('cy-container');
  let height = Math.max(window.innerHeight - HLC_UNUSABLE_HEIGHT_PX,
                        HLC_MIN_HEIGHT_PX) + 'px';
  container.setAttribute('style', 'height:' + height);
}


// Poll the context and spin the graph
function poll() {
  let response = starling.getContext('/context');
  charlotte.spin(response.devices || {});
  updateDevicePropertiesMap(response.devices || {});
}


// Update the devicePropertiesMap
function updateDevicePropertiesMap(devices) {
  for(const deviceSignature in devices) {
    if(!devicePropertiesMap.has(deviceSignature)) {
      let device = devices[deviceSignature];
      let deviceUrl = device.url;

      if(!deviceUrl && device.hasOwnProperty('statid')) {
        deviceUrl = device.statid.uri;
      }

      if(deviceUrl) {
        cormorant.retrieveStory(deviceUrl, {}, (story) => {
          let imageUrl = cuttlefishStory.determineImageUrl(story);
          let title;

          if(!deviceUrl.includes('sniffypedia.org')) {
            title = cuttlefishStory.determineTitle(story);
          }

          if(imageUrl || title) {
            let deviceProperties = {};
            if(imageUrl) { deviceProperties.imageUrl = imageUrl }
            if(title) { deviceProperties.title = title }
            devicePropertiesMap.set(deviceSignature, deviceProperties);
          }
        });
      }
    }
  }
}
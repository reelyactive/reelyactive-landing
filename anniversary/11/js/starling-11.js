/**
 * Copyright reelyActive 2022-2023
 * We believe in an open Internet of Things
 */


let starling = (function() {

  // Internal constants
  let DEFAULT_TRANSMITTERS = [
      { id: "001bc50940000000", idType: 1, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Product/reelyActive_RA-T411/",
        name: "RA-T411" } },
      { id: "fee150bada55", idType: 3, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Product/Any_BLE-Device/",
        name: "Bluetooth Low Energy" } },
      { id: "d070b11d070b", idType: 3, dynambProperties: [],
        statid: { deviceIds: [ "496f4944434f4445b73e5554462d3332/0001/f989" ] },
        url: "https://www.reelyactive.com/team/barnowl/" },
      { id: "a00000000000000000001234", idType: 5, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Standard/Electronic_Product_Code/",
        name: "EPC" } },
      { id: "04140000", idType: 7, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Organization/EnOcean_Alliance/",
        name: "EnOcean Alliance" } },
      { id: "c07105de81ce", idType: 3, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Product/Any_Curious-Device/" } },
      { id: "a00000000000000000005678", idType: 5, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Organization/RAIN_Alliance/",
        name: "RAIN Tag" } },
      { id: "04140001", idType: 7, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Organization/EnOcean_GmbH/",
        name: "EnOcean" } },
      { id: "e50010000002", idType: 3 ,
        dynambProperties: [ 'acceleration', 'illuminance', 'isContactDetected',
                            'isMotionDetected', 'temperature',
                            'relativeHumidity' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/enocean-emsib/" } },
      { id: "ac233fa00004", idType: 2,
        dynambProperties: [ 'isButtonPressed', 'isMotionDetected' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-mwc01/" } },
      { id: "ac233fa00006", idType: 2,
        dynambProperties: [ 'illuminance', 'isMotionDetected', 'temperature', 'humidity' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-msp01/" } },
      { id: "e50000000001", idType: 3,
        dynambProperties: [ 'illuminance', 'isMotionDetected' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/enocean-emdcb/" } },
      { id: "ac233fa00007", idType: 2,
        dynambProperties: [ 'isMotionDetected' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-msv01/" } },
      { id: "ac233fa00003", idType: 2,
        dynambProperties: [ 'isButtonPressed' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-b10/" } },
      { id: "ac233fa00005", idType: 2,
        dynambProperties: [ 'isContactDetected' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-s4/" } },
      { id: "ac233fa00008", idType: 2,
        dynambProperties: [ 'isContactDetected' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-mbt01/" } },
      { id: "ac233fa00001", idType: 2, dynambProperties: [ 'acceleration' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-e8/" } },
      { id: "ac233fa00002", idType: 2,
        dynambProperties: [ 'temperature', 'relativeHumidity' ],
        statid: { uri: "https://www.reelyactive.com/anniversary/11/stories/minew-s1/" } },
      { id: "a991ede81ce4", idType: 3, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Product/Apple_AirPods/" } },
      { id: "0c4708eca570", idType: 3, dynambProperties: [],
        statid: { uri: "https://sniffypedia.org/Product/Google_Chromecast/",
                  uuids: [ "fea0" ], name: "Ambient Display" } },
      { id: "0be118ad0660", idType: 3, dynambProperties: [],
        statid: { deviceIds: [ "496f49445554462d3332/00000001f415"] },
        url: "https://www.reelyactive.com/team/obelix/" }
  ];
  let DEFAULT_RECEIVERS = [
      { id: "204c0fffffff", idType: 2, position: [ -10, 8 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/aruba-ap/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "ac233fa00064", idType: 2, position: [ 10, -8 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/minew-mg4/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "ac233fa00061", idType: 1, position: [ 10, 8 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/minew-g1/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "0b1e6a7e8a44", idType: 2, position: [ -10, -8 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/pc/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "ac233fa00063", idType: 2, position: [ 10, 0 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/minew-mg3/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "0b1e6a7e8a42", idType: 2, position: [ -10, 0 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/raspberry-pi/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "001bc50940820000", idType: 1, position: [ 8, 6 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/owl-in-one/",
        acceptedIdTypes: [ 2, 3 ] },
      { id: "001bc50940810000", idType: 1, position: [ -12, 6 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/reelceiver/",
        acceptedIdTypes: [ 1, 2, 3 ] },
      { id: "001625ffffff", idType: 2, position: [ -10, 4 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/impinj-r700/",
        acceptedIdTypes: [ 4, 5 ] },
      { id: "0b1e6a7e8a43", idType: 2, position: [ -10, -4 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/rf-controls/",
        acceptedIdTypes: [ 4, 5 ] },
      { id: "0b1e6a7e8a46", idType: 2, position: [ 10, 4 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/csl-cs463/",
        acceptedIdTypes: [ 4, 5 ] },
      { id: null, idType: 0, position: [ 10, -4 ],
        url: "https://www.reelyactive.com/anniversary/11/stories/enocean-usb/",
        acceptedIdTypes: [ 7 ] }
  ];
  let DEFAULT_UPDATE_CYCLE_MILLISECONDS = 4000;

  // Internal variables
  let eventCallbacks = { raddec: [], dynamb: [], connect: [] };
  let transmitters = DEFAULT_TRANSMITTERS;
  let receivers = DEFAULT_RECEIVERS;
  let transmitterIndex = 0;
  let isEmulating = false;
  let isConnect = false;
  let contextCount = 0;

  // Emulate a raddec
  function createRaddec(transmitter, receivers) {
    let raddec = {
      transmitterId: transmitter.id,
      transmitterIdType: transmitter.idType,
      rssiSignature: [],
      events: [],
      timestamp: Date.now()
    };

    receivers.forEach((receiver) => {
      raddec.rssiSignature.push({
        receiverId: receiver.id,
        receiverIdType: receiver.idType,
        rssi: -90 + Math.round(Math.random() * 40)
      });
    });
    raddec.rssiSignature.sort((a, b) => (b.rssi - a.rssi));

    if(Math.random() > 0.5) {
      raddec.events.push(1);
    }
    if(transmitter.dynambProperties.length > 0) {
      raddec.events.push(2);
    }
    if(raddec.events.length === 0) {
      raddec.events.push(3);
    }

    return raddec;
  }

  // Emulate a dynamb
  function createDynamb(device) {
    if(device.dynambProperties.length === 0) {
      return null;
    }

    let dynamb = {
      deviceId: device.id,
      deviceIdType: device.idType,
      timestamp: Date.now()
    };

    device.dynambProperties.forEach((property) => {
      dynamb[property] = createDynambProperty(property);
    });

    return dynamb;
  }

  // Emulate a dynamb property
  function createDynambProperty(property) {
    let randomBoolean = (Math.random() > 0.5) ? true : false;
    switch(property) {
      case 'acceleration':
        return [ (Math.random() * 2) - 1, (Math.random() * 2) - 1,
                 (Math.random() * 2) - 1 ];
      case 'illuminance':
        return Math.round(Math.random() * 1000);
      case 'isButtonPressed':
        return [ randomBoolean ];
      case 'isContactDetected':
        return [ randomBoolean ];
      case 'isMotionDetected':
        return [ randomBoolean ];
      case 'temperature':
        return Math.round(Math.random() * 20) + 15;
      case 'relativeHumidity':
        return Math.round(Math.random() * 100);
    }
  }

  // Emulate a context of devices
  function createDevices(route) {
    let devices = {};
    let numberOfDevicesToInclude = (contextCount - 1) % transmitters.length;

    transmitters.forEach((transmitter, index) => {
      if(index < numberOfDevicesToInclude) {
        let signature = transmitter.id + SIGNATURE_SEPARATOR +
                        transmitter.idType;
        let device = { nearest: [] };
        let dynamb = createDynamb(transmitter);

        receivers.forEach((receiver) => {
          if(receiver.acceptedIdTypes.includes(transmitter.idType)) {
            if((transmitter.idType === 5) ||
               ((Math.random() * device.nearest.length) < 0.7)) {
              device.nearest.push({
                device: receiver.id + SIGNATURE_SEPARATOR + receiver.idType,
                rssi: -90 + Math.round(Math.random() * 40)
              });
            }
          }
        });
        device.nearest.sort((a, b) => (b.rssi - a.rssi));

        if(dynamb) { device.dynamb = dynamb; }
        if(transmitter.statid) { device.statid = transmitter.statid; }
        if(transmitter.tags) { device.tags = transmitter.tags; }
        if(transmitter.url) { device.url = transmitter.url; }

        devices[signature] = device;
      }
    });

    receivers.forEach((receiver) => {
      let signature = receiver.id + SIGNATURE_SEPARATOR + receiver.idType;
      let device = {};

      if(receiver.url) { device.url = receiver.url; }
      if(receiver.directory) { device.directory = receiver.directory; }
      if(receiver.position) { device.position = receiver.position; }

      devices[signature] = device;
    });

    return devices;
  }

  // Iterate a single emulated event and set timeout for the next
  function iterate() {
    let raddec = createRaddec(transmitters[transmitterIndex], receivers);
    let dynamb = createDynamb(transmitters[transmitterIndex]);
    let interval = DEFAULT_UPDATE_CYCLE_MILLISECONDS / transmitters.length;

    eventCallbacks.raddec.forEach((callback) => {
      callback(raddec);
    });
    if(dynamb) {
      eventCallbacks.dynamb.forEach((callback) => {
        callback(dynamb);
      });
    }
    if(isConnect) {
      eventCallbacks.connect.forEach((callback) => callback());
      isConnect = false;
    }

    transmitterIndex = (transmitterIndex + 1) % transmitters.length;
    setTimeout(iterate, interval);
  }

  // Emulate a connection
  let connect = function(url) {
    isConnect = true;
    return this;
  }

  // Get the (emulated) context for a specific route
  let getContext = function(route) {
    contextCount++;
    return { devices: createDevices(route) };
  };

  // Register a callback for the given event type
  let setEventCallback = function(event, callback) {
    if(!(callback && (typeof callback === 'function'))) { 
      return;
    }
    if(eventCallbacks.hasOwnProperty(event)) {
      eventCallbacks[event].push(callback);
      if(!isEmulating) {
        iterate();
        isEmulating = true;
      }
    }
  };

  // Expose the following functions and variables
  return {
    on: setEventCallback,
    getContext: getContext,
    connect: connect,
    transmitters: transmitters, // Added for
    receivers: receivers        //   demo
  }

}());

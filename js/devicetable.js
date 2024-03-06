// Render the given list of devices based on the given filters
function renderDeviceTableRows(devices, target, columns, filters) {
  for(const deviceName in devices) {
    columns = columns || [];
    filters = filters || {};

    let device = devices[deviceName];
    let isPassingFilters = { useCases: false,
                             technologies: false,
                             dynambProperties: false };
    let tr = document.getElementById(deviceName);

    if(Array.isArray(filters.useCases)) {
      filters.useCases.forEach((useCase) => {
        if(Array.isArray(device.useCases) &&
           device.useCases.includes(useCase)) {
          isPassingFilters.useCases = true;
        }
      });
    }
    else {
      isPassingFilters.useCases = true;
    }

    if(Array.isArray(filters.technologies)) {
      filters.technologies.forEach((technology) => {
        if(Array.isArray(device.technologies) &&
           device.technologies.includes(technology)) {
          isPassingFilters.technologies = true;
        }
      });
    }
    else {
      isPassingFilters.technologies = true;
    }

    if(Array.isArray(filters.dynambProperties)) {
      filters.dynambProperties.forEach((property) => {
        if(Array.isArray(device.dynambProperties) &&
           device.dynambProperties.includes(property)) {
          isPassingFilters.dynambProperties = true;
        }
      });
    }
    else {
      isPassingFilters.dynambProperties = true;
    }

    let isPassingAllFilters = isPassingFilters.useCases &&
                              isPassingFilters.technologies &&
                              isPassingFilters.dynambProperties;

    if(tr) {
      tr.hidden = !isPassingAllFilters;
    }
    else if(!tr && isPassingAllFilters) {
      tr = renderDeviceTableRow(device, columns);
      tr.setAttribute('id', deviceName);
      target.appendChild(tr);
    }
  }
}

// Render the given device as a table row
function renderDeviceTableRow(device, columns) {
  let tr = document.createElement('tr');

  columns.forEach((column) => {
    let td = document.createElement('td');

    switch(column) {
      case 'vendor':
      case 'model':
        td.textContent = device[column] || '';
        break;
      case 'technologies':
        if(Array.isArray(device.technologies)) {
          device.technologies.forEach((technology, index) => {
            switch(technology) {
              case 'ble':
                td.textContent += 'BLE';
                break;
              case 'rain':
                td.textContent += 'RAIN';
                break;
              case 'enocean':
                td.textContent += 'EnOcean';
                break;
            }
            if(index < (device.technologies.length - 1)) {
              td.textContent += ', ';
            }
          });
        }
        break;
      case 'useCases':
        if(Array.isArray(device.useCases)) {
          device.useCases.forEach((useCase, index) => {
            let i = document.createElement('i');
            switch(useCase) {
              case 'oa':
                i.setAttribute('class', 'fas fa-shoe-prints me-2');
                break;
              case 'at':
                i.setAttribute('class', 'fas fa-tag me-2');
                break;
              case 'pt':
                i.setAttribute('class', 'fas fa-user-tag me-2');
                break;
              case 'es':
                i.setAttribute('class', 'fas fa-thermometer-half me-2');
                break;
              case 'id':
                i.setAttribute('class', 'fas fa-people-arrows me-2');
                break;
            }
            td.appendChild(i);
          });
        }
        break;
      case 'dynambProperties':
        if(Array.isArray(device.dynambProperties)) {
          td.setAttribute('class', 'font-monospace small');
          device.dynambProperties.forEach((property, index) => {
            td.textContent += property;
            if(index < (device.dynambProperties.length - 1)) {
              td.textContent += ', ';
            }
          });
        }
        break;
      case 'links':
        if(Array.isArray(device.links)) {
          if(device.links.length > 0) {
            let div = document.createElement('div');
            let a = document.createElement('a');
            let ul = document.createElement('ul');
            div.setAttribute('class', 'dropdown');
            a.setAttribute('class',
                           'btn btn-sm btn-outline-primary dropdown-toggle');
            a.setAttribute('data-bs-toggle', 'dropdown');
            a.textContent = 'Select';
            ul.setAttribute('class', 'dropdown-menu');

            device.links.forEach((link) => {
              let li = document.createElement('li');
              let lia = document.createElement('a');
              lia.setAttribute('class', 'dropdown-item');
              lia.setAttribute('href', link.url);
              lia.setAttribute('target', '_blank');
              lia.textContent = link.title || 'Link';
              li.appendChild(lia);
              ul.appendChild(li);
            });

            div.appendChild(a);
            div.appendChild(ul);
            td.appendChild(div);
          }
        }
        break;
        
    }
    tr.appendChild(td);
  });

  return tr;
}
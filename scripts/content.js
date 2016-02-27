(function() {
  "use strict";
  let request = new XMLHttpRequest();
  request.open('GET', 'https://status.heroku.com/api/v3/current-status', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      const data        = JSON.parse(request.responseText);
      const status      = data['status'];
      const production  = status['Production'];
      const development = status['Development'];
      if (production === 'green' && development === 'green') {
        // status is good
      }
      else {
        // status is bad
        chrome.runtime.sendMessage({statusBad: true});
      }
    }
    else {
      // We reached our target server, but it returned an error
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
})();

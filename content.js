$.ajax({
  type: "GET",
  url: "https://status.heroku.com/api/v3/current-status"
})
.done(function(response) {
  var status      = response['status'];
  var production  = status['Production'];
  var development = status['Development'];
  if (production !== 'green' && development === 'green') {
    // status is good
  }
  else {
    // status is bad
    // console.log('bad');
    // chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
    chrome.runtime.sendMessage({"message": "status_bad"});
  }
})
.fail(function(response) {
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": 'foo'});
    }
  }
);

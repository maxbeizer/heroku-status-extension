chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: "https://status.heroku.com"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.statusBad) {
      chrome.browserAction.setBadgeText({text: "!"});
    }
    else if (request.statusUnknown) {
      chrome.browserAction.setBadgeText({text: "?"});
    }
    else {
      console.log('unhandled message');
    }
  }
);

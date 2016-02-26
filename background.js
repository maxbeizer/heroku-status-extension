// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "status_bad" ) {
      // chrome.tabs.create({"url": request.url});
      // console.log(request.url);
      console.log('fooooooooooooooooo');
      chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
    }
    else {
      console.log('baaaaaaaaaaaaaar');
    }
  }
);

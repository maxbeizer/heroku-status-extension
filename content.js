$.ajax({
  type: "GET",
  url: "https://status.heroku.com/api/v3/current-status"
})
.done(function(response) {
  var status      = response['status'];
  var production  = status['Production'];
  var development = status['Development'];
  if (production === 'green' && development === 'green') {
    // status is good
  }
  else {
    // status is bad
    chrome.runtime.sendMessage({statusBad: true});
  }
})
.fail(function(_) {
  chrome.runtime.sendMessage({statusUnknown: true});
});

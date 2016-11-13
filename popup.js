document.addEventListener('DOMContentLoaded', function() {
  var availabilityButton = document.getElementById('checkAvailability');
  var bckg = chrome.extension.getBackgroundPage();
  availabilityButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'getAvailability', function(response) {

      });
    });
  });
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === 'sendAvailability') {
      alert(request);
    }
  });
});
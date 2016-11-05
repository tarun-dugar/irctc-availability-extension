console.log('hello');
chrome.runtime.onMessage.addListener((response) => {
	alert(response);
});
var tabURL = "";
chrome.runtime.onMessage.addListener(
function(message, sender, sendResponse) {

   chrome.tabs.query({active: true, currentWindow: true},
     function(arrayOfTabs) {
       var activeTab = arrayOfTabs[0];
       tabURL = activeTab.url;

     });
    }
  );

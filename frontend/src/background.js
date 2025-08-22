chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarize",
    title: "Summarize with AI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "summarize") {
    chrome.storage.local.set({ selectedText: info.selectionText });
    chrome.action.openPopup();
  }
});

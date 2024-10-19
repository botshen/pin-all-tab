export default defineBackground(() => {
  browser.action.onClicked.addListener(async () => {
    try {
      const tabs = await browser.tabs.query({});
      for (const tab of tabs) {
        if (tab.id) {
          await browser.tabs.update(tab.id, { pinned: true });
        }
      }
    } catch (error) {
      console.error('Error pinning tabs:', error);
    }
  });
});

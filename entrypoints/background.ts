export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });
  browser.action.onClicked.addListener(() => {
    try {
      console.log('Hello 111!');

    } catch (error) {
      console.error(error)
    }
  })
});

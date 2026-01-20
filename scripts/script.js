const tg = window.Telegram.WebApp;

document.getElementById("header__title").onclick = () => {
  var requestElement = document.getElementById("main__emojiStatusAccessButton");
  var requestElementState = window.getComputedStyle(requestElement);
  requestElement.style.visibility =
    requestElementState.visibility === "hidden" ? "visible" : "hidden";
};

document.getElementById("main__setEmojiButton").onclick = () => {
  const emojiId = document.getElementById("main__emojiInput").value;
  tg.setEmojiStatus(emojiId, { duration: 0 });
};

document.getElementById("main__emojiStatusAccessButton").onclick = () => {
  tg.requestEmojiStatusAccess();
};

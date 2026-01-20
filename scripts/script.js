const tg = window.Telegram.WebApp;

document.getElementById("header__title").onclick = () => {
  var requestElement = document.getElementById("main__emojiStatusAccessButton");
  var requestElementState = window.getComputedStyle(requestElement);
  requestElement.style.display =
    requestElementState.display === "none" ? "block" : "none";
};

document.getElementById("main__setEmojiButton").onclick = () => {
  const emojiId = document.getElementById("main__emojiInput").value;
  tg.setEmojiStatus(emojiId, { duration: 0 });
};

document.getElementById("main__emojiStatusAccessButton").onclick = () => {
  tg.requestEmojiStatusAccess();
};

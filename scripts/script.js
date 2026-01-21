const tg = window.Telegram.WebApp;

document.getElementById("header__title").onclick = () => {
  var requestElement = document.getElementById(
    "wrapper__emojiStatusAccessButton",
  );
  var requestElementState = window.getComputedStyle(requestElement);
  requestElement.style.display =
    requestElementState.display === "none" ? "block" : "none";
};

document.getElementById("wrapper__setEmojiButton").onclick = () => {
  const emojiId = document.getElementById("wrapper__emojiInput").value;
  tg.setEmojiStatus(emojiId, { duration: 0 });
};

document.getElementById("wrapper__emojiStatusAccessButton").onclick = () => {
  tg.requestEmojiStatusAccess();
};

//bookmark functionality
document
  .querySelector(".bookmark")
  .addEventListener("click", changeBookmarkIcon);

function changeBookmarkIcon() {
  var button = this;
  var bookmarkImage = button.querySelector("img");
  button.classList.toggle("filled");

  if (button.classList.contains("filled")) {
    bookmarkImage.src = "resources/bookmark_filled.png";
  } else {
    bookmarkImage.src = "resources/bookmark_transparent.png";
  }
}

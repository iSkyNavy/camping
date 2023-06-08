document.getElementById("menu-buttom").addEventListener("click", openMenu);

const contentMenu = document.getElementById("menu-lateral");
const classOpen = "menu-lateral--open";

const contentLine = document.getElementById("content-line");
const classLine = "content-line--open";

function openMenu() {
  if (contentMenu.classList.contains(classOpen)) {
    contentMenu.classList.remove(classOpen);
    contentLine.classList.remove(classLine);
  } else {
    contentMenu.classList.add(classOpen);
    contentLine.classList.add(classLine);
  }
}

//selected heart red.
const classHeartWhite = "card__heart-white";
const classHeartRed = "card__heart-red";

function heartSelected(img) {
  switch (img.alt) {
    case "heart-white":
      img.alt = "heart-red";
      img.src = "asset/images/corazon-rojo.png";
      break;

    case "heart-red":
      img.alt = "heart-white";
      img.src = "asset/images/corazon.png";
      break;
  }
}
// to close menu when the user do click any item.
function closeMenu() {
  contentLine.classList.remove(classLine);
  contentMenu.classList.remove(classOpen);
}

const header = document.querySelector(`header`);
const nav = document.querySelector(`nav`);
const xMark = document.getElementById(`xMark`);
const xMarkSpans = document.querySelectorAll(`#xMark span`);
const navUl = document.querySelector(`nav ul`);
const homeButton = document.querySelector(`#home .button`);

xMark.addEventListener(`click`, () => {
  navChecker();
});
// toggle nav when use clicks on burger menu elements

// checks if nav is open or closed and toggle it

function navChecker() {
  if (nav.classList.contains(`list-open`)) {
    nav.classList.remove(`list-open`);
  } else {
    nav.classList.add(`list-open`);
  }
}
// close nav if it's open and user clicks outside it
document.addEventListener(`click`, (e) => {
  if (
    e.target !== navUl &&
    e.target !== xMark &&
    !e.target.classList.contains(`nav-links`) &&
    nav.classList.contains(`list-open`)
  ) {
    nav.classList.remove(`list-open`);
  }
});

// fill the screen when the landing button is clicked
if (homeButton) {
  homeButton.addEventListener(`click`, () => {
    header.style.zIndex = `1`;
    homeButton.classList.add(`clicked`);
    setTimeout(() => {
      location.href = "./destination";
    }, 700);
  });
}

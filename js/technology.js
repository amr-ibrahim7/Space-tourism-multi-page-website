const techLinks = document.querySelectorAll(`#technology ul li a`);
const techName = document.getElementById(`techName`);
const techImgP = document.getElementById(`techImgP`);
const techImgL = document.getElementById(`techImgL`);
const techDescription = document.getElementById(`techDescription`);
const changingEle = document.querySelectorAll(`.changing`);

let techTarget;

if (techLinks) {
  techLinks.forEach((link) => {
    // change active class on click
    link.addEventListener(`click`, () => {
      techLinks.forEach((link) => link.classList.remove(`active`));
      link.classList.add(`active`);

      // hide all changings elements
      changingEle.forEach((el) => (el.style.opacity = `0`));

      // change page content
      // get the index of the clicked link
      setTimeout(() => {
        techTarget = link.dataset.index;

        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => data.technology)

          .then((data) => {
            techName.innerHTML = data[techTarget].name;
            return data;
          })
          .then((data) => {
            techDescription.innerHTML = data[techTarget].description;
            return data;
          })
          .then((data) => {
            techImgP.src = data[techTarget].images.portrait;
            return data;
          })
          .then((data) => {
            techImgL.src = data[techTarget].images.landscape;
            return data;
          });

        setTimeout(() => {
          changingEle.forEach((el) => (el.style.opacity = `1`));
        }, 460);
      }, 280);
    });
  });
}

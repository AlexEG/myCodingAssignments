// [W = Week]  [T = Title] [C = Content]

const cssCourse = document.querySelector("#cssCourse");

const cssW1T = document.querySelector("#cssWeek1");
const cssW2T = document.querySelector("#cssWeek2");
const cssW3T = document.querySelector("#cssWeek3");

const cssW1C = document.querySelector(".cssweek1");
const cssW2C = document.querySelector(".cssweek2");
const cssW3C = document.querySelector(".cssweek3");

cssCourse.addEventListener("click", function () {
  cssTitleOne();
  cssTitleTwo();
  cssTitleThree();
});

cssW1T.addEventListener("click", function () {
  cssWone();
});
cssW2T.addEventListener("click", function () {
  cssWtwo();
});
cssW3T.addEventListener("click", function () {
  cssWthree();
});

//////////////////////

function cssWone() {
  if (cssW1C.classList.contains("fold")) {
    cssW1C.classList.remove("fold");
  } else {
    cssW1C.classList.add("fold");
  }
}

function cssWtwo() {
  if (cssW2C.classList.contains("fold")) {
    cssW2C.classList.remove("fold");
  } else {
    cssW2C.classList.add("fold");
  }
}

function cssWthree() {
  if (cssW3C.classList.contains("fold")) {
    cssW3C.classList.remove("fold");
  } else {
    cssW3C.classList.add("fold");
  }
}

//////////////////////

function cssTitleOne() {
  cssW1C.classList.add("fold");

  if (cssW1T.classList.contains("fold")) {
    cssW1T.classList.remove("fold");
  } else {
    cssW1T.classList.add("fold");
  }
}
function cssTitleTwo() {
  cssW2C.classList.add("fold");

  if (cssW2T.classList.contains("fold")) {
    cssW2T.classList.remove("fold");
  } else {
    cssW2T.classList.add("fold");
  }
}

function cssTitleThree() {
  cssW3C.classList.add("fold");

  if (cssW3T.classList.contains("fold")) {
    cssW3T.classList.remove("fold");
  } else {
    cssW3T.classList.add("fold");
  }
}

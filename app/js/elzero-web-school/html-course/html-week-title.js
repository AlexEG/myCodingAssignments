// [W = Week]  [T = Title] [C = Content]

const htmlCourse = document.querySelector("#htmlCourse");

const htmlW1T = document.querySelector("#htmlWeek1");
const htmlW2T = document.querySelector("#htmlWeek2");
const htmlW3T = document.querySelector("#htmlWeek3");

const htmlW1C = document.querySelector(".htmlweek1");
const htmlW2C = document.querySelector(".htmlweek2");
const htmlW3C = document.querySelector(".htmlweek3");

htmlCourse.addEventListener("click", function () {
  htmlTitleOne();
  htmlTitleTwo();
  htmlTitleThree();
});

htmlW1T.addEventListener("click", function () {
  htmlWone();
});
htmlW2T.addEventListener("click", function () {
  htmlWtwo();
});
htmlW3T.addEventListener("click", function () {
  htmlWthree();
});

//////////////////////

function htmlWone() {
  if (htmlW1C.classList.contains("fold")) {
    htmlW1C.classList.remove("fold");
  } else {
    htmlW1C.classList.add("fold");
  }
}

function htmlWtwo() {
  if (htmlW2C.classList.contains("fold")) {
    htmlW2C.classList.remove("fold");
  } else {
    htmlW2C.classList.add("fold");
  }
}

function htmlWthree() {
  if (htmlW3C.classList.contains("fold")) {
    htmlW3C.classList.remove("fold");
  } else {
    htmlW3C.classList.add("fold");
  }
}

//////////////////////

function htmlTitleOne() {
  htmlW1C.classList.add("fold");

  if (htmlW1T.classList.contains("fold")) {
    htmlW1T.classList.remove("fold");
  } else {
    htmlW1T.classList.add("fold");
  }
}
function htmlTitleTwo() {
  htmlW2C.classList.add("fold");

  if (htmlW2T.classList.contains("fold")) {
    htmlW2T.classList.remove("fold");
  } else {
    htmlW2T.classList.add("fold");
  }
}

function htmlTitleThree() {
  htmlW3C.classList.add("fold");

  if (htmlW3T.classList.contains("fold")) {
    htmlW3T.classList.remove("fold");
  } else {
    htmlW3T.classList.add("fold");
  }
}

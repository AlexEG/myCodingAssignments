// [W = Week]  [T = Title] [C = Content]

const jsCourse = document.querySelector("#jsCourse");

const jsW1T = document.querySelector("#jsWeek1");
const jsW2T = document.querySelector("#jsWeek2");
const jsW3T = document.querySelector("#jsWeek3");

const jsW1C = document.querySelector(".jsweek1");
const jsW2C = document.querySelector(".jsweek2");
const jsW3C = document.querySelector(".jsweek3");

jsCourse.addEventListener("click", function () {
  jsTitleOne();
  jsTitleTwo();
  jsTitleThree();
});

jsW1T.addEventListener("click", function () {
  jsWone();
});
jsW2T.addEventListener("click", function () {
  jsWtwo();
});
jsW3T.addEventListener("click", function () {
  jsWthree();
});

//////////////////////

function jsWone() {
  if (jsW1C.classList.contains("fold")) {
    jsW1C.classList.remove("fold");
  } else {
    jsW1C.classList.add("fold");
  }
}

function jsWtwo() {
  if (jsW2C.classList.contains("fold")) {
    jsW2C.classList.remove("fold");
  } else {
    jsW2C.classList.add("fold");
  }
}

function jsWthree() {
  if (jsW3C.classList.contains("fold")) {
    jsW3C.classList.remove("fold");
  } else {
    jsW3C.classList.add("fold");
  }
}

//////////////////////

function jsTitleOne() {
  jsW1C.classList.add("fold");

  if (jsW1T.classList.contains("fold")) {
    jsW1T.classList.remove("fold");
  } else {
    jsW1T.classList.add("fold");
  }
}
function jsTitleTwo() {
  jsW2C.classList.add("fold");

  if (jsW2T.classList.contains("fold")) {
    jsW2T.classList.remove("fold");
  } else {
    jsW2T.classList.add("fold");
  }
}

function jsTitleThree() {
  jsW3C.classList.add("fold");

  if (jsW3T.classList.contains("fold")) {
    jsW3T.classList.remove("fold");
  } else {
    jsW3T.classList.add("fold");
  }
}

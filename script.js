let clubName = "JR Health Club";
console.log("Welcome to " + clubName);

function sayHi() {
  console.log("Glad you are here! Let's get fit.");
}

// Day 2 Getting HTML elements
let youthButton = document.querySelector("#youth");
let beginnerButton = document.querySelector("#beginner");
let intermediateButton = document.querySelector("#intermediate");
let advancedButton = document.querySelector("#advanced");


function showNextMeeting() {
  youthButton.textContent = "Our next meeting starts at 4pm";
  beginnerButton.textContent = "Our next meeting starts at 5pm";
  intermediateButton.textContent = "Our next meeting starts at 6pm";
  advancedButton.textContent = "Our next meeting starts at 7pm";
}

youthButton.addEventListener("click", showNextMeeting);
beginnerButton.addEventListener("click", showNextMeeting);
intermediateButton.addEventListener("click", showNextMeeting);
advancedButton.addEventListener("click", showNextMeeting);


// Call the functions
function sayBye(){
  console.log("Awesome workout! See you next session!")
}
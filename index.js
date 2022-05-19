var arr = document.querySelectorAll(".drum");

// playing sound
function audioPlay(audioFile) {
  this.audioFile = audioFile;
  this.play = function () {
    var audio = new Audio(audioFile);
    audio.play();
  };
}

// playing sound on pressing any key
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new audioPlay("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new audioPlay("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new audioPlay("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new audioPlay("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new audioPlay("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var snare = new audioPlay("sounds/snare.mp3");
      snare.play();
      break;
  }
}

// Adding Event listener to every button

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    afterClick(this.innerHTML);
  });
}

// Changing appeareance of the button after each click
function afterClick(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

window.addEventListener("keypress", function (event) {
  afterClick(event.key);
  makeSound(event.key);
});

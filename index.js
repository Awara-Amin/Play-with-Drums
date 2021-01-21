alert("I am in LOVE with JavaScript. Are you? If yesy press OK! The second time, january 2021");


var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTPressed = this.innerHTML;
    checkingPressedKey(buttonInnerHTPressed);
    animationKeys (buttonInnerHTPressed);

  });
}

document.addEventListener("keypress", function(event){
  console.log(event.key);
  checkingPressedKey(event.key);
  animationKeys (event.key);

});


function checkingPressedKey(key) {

  if (key === "w") {
    // alert("you are fucked");
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
  }
  else if (key === "a") {
    // alert("you are fucked too");
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
  }

  else if (key === "s") {

    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
  }

  else if (key === "d") {

    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
  }

  else if (key === "j") {

    var crash = new Audio("sounds/crash.mp3");
    crash.play();
  }

  else if (key === "k") {

    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
  }

  else if (key === "l") {

    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  }
    }

    function animationKeys (anykey){
      var selectedKey = document.querySelector("." + anykey);
      console.log(selectedKey);
      // var selectedKey = ("." + anykey);
      // console.log(selectedKey);

      selectedKey.classList.add("pressed");

      setTimeout (function(){
        selectedKey.classList.remove("pressed");
      }, 100);

    }

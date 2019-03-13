
function playAudio(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return; // stops the app
  }
  audio.currentTime = 0; // which rewind to start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; // skipping if that is not a transform
  }
  console.log(e);
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".keys");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playAudio);
const container = document.getElementById("container");
const sidebar = document.getElementById("sidebar");
container.style.height = window.innerHeight + "px"; // fit to screen size
sidebar.style.height = window.innerHeight + "px";

const animated = document.getElementById("animated");
const triggers = document.getElementsByClassName("trigger");
const actions = document.getElementById("actions");

const animations = `
  bounce flash pulse rubberBand shakeX shakeY headShake swing tada wobble jello heartBeat
  backInDown backInLeft backInRight backInUp
  backOutDown backOutLeft backOutRight backOutUp
  bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp
  bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp
  fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeInTopLeft fadeInTopRight fadeInBottomLeft fadeInBottomRight
  fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig fadeOutTopLeft fadeOutTopRight fadeOutBottomRight fadeOutBottomLeft
  flip flipInX flipInY flipOutX flipOutY
  lightSpeedInRight lightSpeedInLeft lightSpeedOutRight lightSpeedOutLeft
  rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight
  rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight
  hinge jackInTheBox rollIn rollOut
  zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp
  zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp
  slideInDown slideInLeft slideInRight slideInUp
  slideOutDown slideOutLeft slideOutRight slideOutUp
  `;

animations
  .split(/\s+/)
  .filter((text) => text.length > 0)
  .map((animation) => {
    const trigger = document.createElement("li");
    trigger.innerHTML = `<a href="#" class="trigger" name="${animation}">${animation}</a>`;
    actions.appendChild(trigger);
  });

for (let i = 0; i < triggers.length; i++) {
  // trigger the animation
  triggers[i].addEventListener("click", () => {
    const animation_name = triggers[i].name;
    animated.classList.add("animate__animated", `animate__${animation_name}`);

    // remove class after animation ended
    animated.addEventListener("animationend", () => {
      animated.classList.remove(
        "animate__animated",
        `animate__${animation_name}`
      );
    });
  });
}

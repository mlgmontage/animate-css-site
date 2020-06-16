const container = document.getElementById("container");
container.style.height = window.innerHeight + "px"; // fit to screen size

const animated = document.getElementById("animated");
const triggers = document.getElementsByClassName("trigger");

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

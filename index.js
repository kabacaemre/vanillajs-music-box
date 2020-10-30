window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads button");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      this.setAttribute("disabled", true);
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    let bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
      pads[index].closest("button").removeAttribute("disabled");
    });
  }
});
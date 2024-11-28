const textArray = ["Web Developer", "UI//UX designer"];
let i = 0;
let txt = "";
let isDeleting = false;
let speed = 100;

function typeWriter() {
  const element = document.getElementById("typewriter");

  if (isDeleting) {
    txt = textArray[i].substring(0, txt.length - 1);
  } else {
    txt = textArray[i].substring(0, txt.length + 1);
  }

  element.textContent = txt;

  if (!isDeleting && txt === textArray[i]) {
    isDeleting = true;
    setTimeout(typeWriter, 1000); // Pause after full text
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    i = (i + 1) % textArray.length;
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

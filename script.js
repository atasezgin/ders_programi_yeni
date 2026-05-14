const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 110;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const phoneFrame = document.querySelector(".phone-frame");

document.addEventListener("mousemove", (event) => {
  if (!phoneFrame) return;

  const x = (window.innerWidth / 2 - event.clientX) / 65;
  const y = (window.innerHeight / 2 - event.clientY) / 65;

  if (window.innerWidth > 1080) {
    phoneFrame.style.transform = `rotate(3deg) rotateY(${x}deg) rotateX(${y}deg)`;
  }
});

document.addEventListener("mouseleave", () => {
  if (!phoneFrame) return;

  if (window.innerWidth > 1080) {
    phoneFrame.style.transform = "rotate(3deg)";
  } else {
    phoneFrame.style.transform = "none";
  }
});

window.addEventListener("resize", () => {
  if (!phoneFrame) return;

  if (window.innerWidth <= 1080) {
    phoneFrame.style.transform = "none";
  }
});
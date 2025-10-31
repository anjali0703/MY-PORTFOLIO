// Floating shapes and theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("floatingContainer");
  const rand = (min, max) => Math.random() * (max - min) + min;
  const total = 35;

  for (let i = 0; i < total; i++) {
    const el = document.createElement("div");
    const isStar = Math.random() > 0.5;
    el.classList.add("shape", isStar ? "star" : "square");
    if (isStar) el.innerHTML = "★";
    el.style.left = rand(0, 100) + "vw";
    el.style.top = rand(0, 100) + "vh";
    el.style.animationDuration = rand(10, 20) + "s";
    container.appendChild(el);

    el.addEventListener("click", (e) => {
      e.stopPropagation();
      document.body.style.background = isStar ? "var(--warm-bg)" : "var(--cool-bg)";
      popShape(el, isStar);
    });

  }

  function popShape(shape, isStar) {
    const rect = shape.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    shape.remove();

    for (let i = 0; i < 10; i++) {
      const p = document.createElement("div");
      p.classList.add("shape");
      if (isStar) {
        p.classList.add("star");
        p.innerHTML = "★";
        p.style.fontSize = rand(10, 20) + "px";
      } else {
        p.classList.add("square");
        const s = rand(10, 20);
        p.style.width = s + "px";
        p.style.height = s + "px";
      }

      p.style.left = centerX + "px";
      p.style.top = centerY + "px";
      container.appendChild(p);

      const angle = (Math.PI * 2 * i) / 10;
      const dist = rand(50, 100);
      const targetX = centerX + Math.cos(angle) * dist;
      const targetY = centerY + Math.sin(angle) * dist;

      p.animate(
        [
          { transform: "translate(0,0)", opacity: 1 },
          { transform: `translate(${targetX - centerX}px,${targetY - centerY}px) scale(0.4)`, opacity: 0 }
        ],
        { duration: 1000 + rand(0, 300), easing: "ease-out", fill: "forwards" }
      ).onfinish = () => p.remove();
    }
  }

  // Profile flip
 document.addEventListener("DOMContentLoaded", function() {
  const photoInner = document.getElementById("photo-inner");
  
  photoInner.addEventListener("click", () => {
    photoInner.classList.toggle("flipped");
  });
});
const texts = [
  "A Creative Frontend Developer.",
  "An Interactive UI Enthusiast.",
  "A Passionate Designer.",
  "An Engineer who loves animation."
];

let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (!typingElement) return;

  currentText = texts[index];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // pause before erasing
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (!menuBtn || !navLinks) {
    console.error("Menu button or nav links not found!");
    return;
  }

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


});



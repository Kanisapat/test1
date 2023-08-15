document.addEventListener("DOMContentLoaded", function() {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector("nav ul");

  bar.onclick = () => {
    nav.classList.toggle("show");
  };
});

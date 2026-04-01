function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMenu() {
  let menu = document.getElementById("navMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

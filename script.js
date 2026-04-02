
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
const track = document.querySelector(".card-track");
const cards = document.querySelectorAll(".card");

let index = 1;
const cardWidth = 280; // width + gap

function updateSlider() {
track.style.transform = `translateX(-${index * cardWidth}px)`;

document.querySelectorAll(".card").forEach(card => {
  card.classList.remove("active");
});

cards[index].classList.add("active");
}

function slide() {
index++;
track.style.transition = "0.5s";

updateSlider();

if (index === cards.length - 1) {
  setTimeout(() => {
    track.style.transition = "none";
    index = 1;
    updateSlider();
  }, 500);
}
}

setInterval(slide, 2000);

// Initial center
updateSlider();

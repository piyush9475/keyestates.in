function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ========== INFINITE CAROUSEL WITH DIRECTION CONTROL ==========
// direction: 'rtl' (right‑to‑left, cards move left) or 'ltr' (left‑to‑right, cards move right)
function initInfiniteCarousel(sliderId, trackId, direction = 'rtl') {
  const slider = document.getElementById(sliderId);
  const track = document.getElementById(trackId);
  if (!slider || !track) return;

  let originalCards = Array.from(track.children);
  if (originalCards.length === 0) return;

  // Clone cards twice to ensure enough content for seamless looping
  originalCards.forEach(card => {
    track.appendChild(card.cloneNode(true));
  });
  originalCards.forEach(card => {
    track.appendChild(card.cloneNode(true));
  });

  let cards = Array.from(track.children);
  let gap = 20;          // matches CSS gap
  let cardWidth = cards[0].offsetWidth;
  let fullSetWidth = originalCards.length * (cardWidth + gap);
  let currentPosition = 0;
  let speed = 0.8;       // pixels per frame – smooth and professional
  let animationId = null;
  let isPaused = false;

  function updateTrack() {
    if (!isPaused) {
      if (direction === 'rtl') {
        // Move left (negative direction)
        currentPosition -= speed;
        // When we've scrolled more than one full set, jump back by one set width
        if (Math.abs(currentPosition) >= fullSetWidth) {
          currentPosition += fullSetWidth;
        }
      } else {
        // Move right (positive direction)
        currentPosition += speed;
        // When we've scrolled forward more than one full set, jump back
        if (currentPosition >= fullSetWidth) {
          currentPosition -= fullSetWidth;
        }
        // Prevent negative edge case on resize
        if (currentPosition < 0) currentPosition = 0;
      }
      track.style.transform = `translateX(${currentPosition}px)`;
    }
    animationId = requestAnimationFrame(updateTrack);
  }

  function recalcDimensions() {
    cardWidth = cards[0].offsetWidth;
    fullSetWidth = originalCards.length * (cardWidth + gap);
    // Clamp current position within valid range
    if (direction === 'rtl') {
      if (Math.abs(currentPosition) > fullSetWidth) {
        currentPosition = -(Math.abs(currentPosition) % fullSetWidth);
      }
    } else {
      if (currentPosition > fullSetWidth) {
        currentPosition = currentPosition % fullSetWidth;
      }
      if (currentPosition < 0) currentPosition = 0;
    }
    track.style.transform = `translateX(${currentPosition}px)`;
  }

  window.addEventListener('resize', () => recalcDimensions());

  // Pause on hover / touch for better UX
  slider.addEventListener('mouseenter', () => { isPaused = true; });
  slider.addEventListener('mouseleave', () => { isPaused = false; });
  slider.addEventListener('touchstart', () => { isPaused = true; });
  slider.addEventListener('touchend', () => { setTimeout(() => { isPaused = false; }, 1000); });

  recalcDimensions();
  animationId = requestAnimationFrame(updateTrack);
}

// Initialize both carousels with correct directions
// Commercial: left‑to‑right  ('ltr')
initInfiniteCarousel('commercialSlider', 'commercialTrack', 'ltr');
// Residential: right‑to‑left ('rtl')
initInfiniteCarousel('residentialSlider', 'residentialTrack', 'rtl');

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

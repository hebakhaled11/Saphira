const v = document.getElementById('jewelVideo');
const btn = document.getElementById('soundToggle');

btn.addEventListener('click', async () => {
  if (v.muted) {
    v.muted = false;
    await v.play();
    btn.textContent = '🔇';
  } else {
    v.muted = true;
    btn.textContent = '🔊';
  }
});
const slider = document.getElementById('slider');
const indicators = document.querySelectorAll('.indicators span');
const slides = document.querySelectorAll('.slide');
let index = 0;

function updateIndicators() {
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function moveSlide(direction) {
  index += direction;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slider.scrollTo({
    left: index * slides[0].offsetWidth,
    behavior: 'smooth'
  });

  updateIndicators();
}

// أوتوماتيك يتنقل
let autoSlide = setInterval(() => {
  moveSlide(1);
}, 3000);

// أول تحديث
updateIndicators();
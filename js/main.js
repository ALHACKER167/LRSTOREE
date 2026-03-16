// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== SLIDER =====
let currentSlide = 0;
const sliderTrack = document.getElementById('sliderTrack');
const sliderDots = document.getElementById('sliderDots');
let totalSlides = 0;
let autoSlide;

if (sliderTrack) {
  totalSlides = sliderTrack.children.length;

  // Build dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
  }

  function goToSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  document.getElementById('sliderPrev')?.addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('sliderNext')?.addEventListener('click', () => goToSlide(currentSlide + 1));

  autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
  sliderTrack.addEventListener('mouseenter', () => clearInterval(autoSlide));
  sliderTrack.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });

  // Touch swipe
  let startX = 0;
  sliderTrack.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  sliderTrack.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
  });
}

// ===== FAQ =====
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('active'));
  if (!isOpen) {
    answer.classList.add('open');
    el.classList.add('active');
  }
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.layanan-card, .step-card, .keung-item, .hero-prev-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s, transform .5s';
  observer.observe(el);
});

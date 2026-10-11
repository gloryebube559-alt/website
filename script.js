const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = contactForm.querySelector('input[name="name"]');
    const name = nameInput ? nameInput.value.trim() : '';
    formMessage.textContent = `Thanks${name ? `, ${name}` : ''}! We\'ve received your inquiry and will get back to you shortly.`;
    contactForm.reset();
  });
}

const revealItems = document.querySelectorAll(
  '.hero-copy, .hero-visual, .service-card, .project-card, .value-item, .process-step, .testimonial-card, .inquiry-form, .stat-item, .floating-badge'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

const revealSection = document.querySelectorAll('.section, .trust-banner, .site-footer');
revealSection.forEach((section) => {
  section.classList.add('reveal-section');
  revealObserver.observe(section);
});

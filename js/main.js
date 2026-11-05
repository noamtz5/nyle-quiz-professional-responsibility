const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.hidden = false;
    formStatus.className = 'form-status';
    formStatus.textContent = 'Sending...';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thanks! Your message has been sent.';
        contactForm.reset();
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Something went wrong. Please try again in a moment.';
    }
  });
}

const quizSlides = document.querySelectorAll('.quiz-slide');

quizSlides.forEach(slide => {
  const choicesList = slide.querySelector('.quiz-choices-list');
  const choices = slide.querySelectorAll('.quiz-choice');

  choices.forEach(choice => {
    choice.addEventListener('click', () => {
      if (choicesList.classList.contains('answered')) return;
      choicesList.classList.add('answered');
      slide.classList.add('answered');

      if (choice.getAttribute('data-correct') !== 'true') {
        choice.classList.add('is-incorrect');
      }
      choices.forEach(c => {
        if (c.getAttribute('data-correct') === 'true') {
          c.classList.add('is-correct');
        }
      });
    });
  });

  const nextBtn = slide.querySelector('.quiz-next-btn[data-next]');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextSlide = document.querySelector(`.quiz-slide[data-slide="${nextBtn.getAttribute('data-next')}"]`);
      if (nextSlide) {
        slide.classList.remove('active');
        nextSlide.classList.add('active');
      }
    });
  }
});

const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message-text');
const toast = document.getElementById('toast');

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    choices.forEach((item) => item.classList.remove('active'));
    choice.classList.add('active');
    message.textContent = choice.dataset.message;
  });
});

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' }));
});

document.getElementById('send-message').addEventListener('click', () => {
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 4200);
});

toast.querySelector('button').addEventListener('click', () => toast.classList.remove('visible'));

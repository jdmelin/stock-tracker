const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const submitEl = document.querySelector('button');

submitEl.addEventListener('click', (event) => {
  event.preventDefault();

  const email = emailEl.value;
  const password = passwordEl.value;
  const payload = {
    email,
    password,
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(({ message }) => {
      if (message === 'success') {
        window.location.replace('/');
      }
    });
});

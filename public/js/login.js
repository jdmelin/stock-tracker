const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const submitEl = document.querySelector('button');

const handleLogin = async (payload) => {
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const { message } = await response.json();

    if (message === 'success') {
      window.location.replace('/');
    }
  } catch {
    // handle error
  }
};

submitEl.addEventListener('click', async (event) => {
  event.preventDefault();

  const email = emailEl.value;
  const password = passwordEl.value;
  const payload = {
    email,
    password,
  };

  handleLogin(payload);
});

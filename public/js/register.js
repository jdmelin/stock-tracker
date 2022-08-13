const firstNameEl = document.querySelector('#first-name');
const lastNameEl = document.querySelector('#last-name');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const submitEl = document.querySelector('button');

const handleRegister = async (payload) => {
  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const { message } = await response.json();

    if (message === 'success') {
      window.location.replace('/login');
    }
  } catch {
    // handle error
  }
};

submitEl.addEventListener('click', (event) => {
  event.preventDefault();

  const firstName = firstNameEl.value;
  const lastName = lastNameEl.value;
  const email = emailEl.value;
  const password = passwordEl.value;
  const payload = {
    firstName,
    lastName,
    email,
    password,
  };

  handleRegister(payload);
});

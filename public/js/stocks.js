const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const { id } = button.dataset;

    fetch(`/stocks/${id}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then(({ message }) => {
        if (message === 'success') {
          button.disabled = true;
        }
      });
  });
}

const buttons = document.querySelectorAll('button');

const handleAddStock = async (id, button) => {
  try {
    const response = await fetch(`/stocks/${id}`, {
      method: 'POST',
    });
    const { message } = await response.json();

    if (message === 'success') {
      button.disabled = true;
    }
  } catch {
    // handle error
  }
};

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const { id } = button.dataset;

    handleAddStock(id, button);
  });
}

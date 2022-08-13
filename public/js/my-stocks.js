const buttons = document.querySelectorAll('button');

const handleDeleteStock = async (id, button) => {
  try {
    const response = await fetch(`/stocks/${id}`, {
      method: 'DELETE',
    });
    const { message } = await response.json();

    if (message === 'success') {
      button.closest('.stock').remove();
    }
  } catch {
    // handle error
  }
};

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const { id } = button.dataset;

    handleDeleteStock(id, button);
  });
}

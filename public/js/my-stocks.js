const buttons = document.querySelectorAll('button');

const handleDeleteStock = async (id) => {
  try {
    const response = await fetch(`/stocks/${id}`, {
      method: 'DELETE',
    });
    const { message } = await response.json();

    if (message === 'success') {
      window.location.reload();
    }
  } catch {
    // handle error
  }
};

for (const button of buttons) {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const { id } = button.dataset;

    handleDeleteStock(id);
  });
}

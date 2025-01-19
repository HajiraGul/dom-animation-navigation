  const square = document.getElementById('square');
  const container = document.getElementById('container');

  document.addEventListener('keydown', (e) => {
    const step = 10;
    const rect = square.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (e.key === 'ArrowUp' && rect.top > containerRect.top) {
      square.style.top = `${rect.top - containerRect.top - step}px`;
    }
    if (e.key === 'ArrowDown' && rect.bottom < containerRect.bottom) {
      square.style.top = `${rect.top - containerRect.top + step}px`;
    }
    if (e.key === 'ArrowLeft' && rect.left > containerRect.left) {
      square.style.left = `${rect.left - containerRect.left - step}px`;
    }
    if (e.key === 'ArrowRight' && rect.right < containerRect.right) {
      square.style.left = `${rect.left - containerRect.left + step}px`;
    }
  });

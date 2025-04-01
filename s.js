
  const open = document.getElementById('open');
  const modal_containers = document.getElementById('modal_containers');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    modal_containers.classList.add('show');
  });

  close.addEventListener('click', () => {
    modal_containers.classList.remove('show');
  });


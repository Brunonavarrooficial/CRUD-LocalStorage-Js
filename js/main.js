const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => document.getElementById('modal')
    .classList.remove('active');

// CRUD - create read update delete

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal);
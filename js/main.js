const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
    clearFields();
}


const tempClient = {
    nome: 'nicolas',
    email: 'nicolasnavarrooficial@gmail.com',
    celular: '(11)95999-6260',
    cidade: 'são paulo',
}
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];

const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

// CRUD - create read update delete

// CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}
// READ
const readClient = () => getLocalStorage();

// UPDATE
const updateClient = (index, client) => {
    const dbClientUp = readClient();
    dbClientUp[index] = client;
    setLocalStorage(dbClientUp);
}

// DELETE
const deleteClient = (index) => {
    const dbClientDel = readClient();
    dbClientDel.splice(index, 1);
    setLocalStorage(dbClientDel);
}

// Interação com layout HTML

const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = '');
}

const saveClient = () => {
    if (isValidFields()) {
        const newUser = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value,
        }
        createClient(newUser);
        closeModal();
        console.log('Cliente cadstrado com sucesso!');
    }
}

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click', saveClient);

document.getElementById('cancelar')
    .addEventListener('click', closeModal);
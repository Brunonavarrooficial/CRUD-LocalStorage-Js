const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => document.getElementById('modal')
    .classList.remove('active');

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
    const dbClient =  getLocalStorage();    
    dbClient.push(client);
    setLocalStorage(dbClient);    
}
// READ
const readClient = () =>  getLocalStorage();

// UPDATE
const updateClient = (index, client) => {
    const dbClientUp = readClient();
    dbClientUp[index] = client;
    setLocalStorage(dbClientUp);

} 

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal);
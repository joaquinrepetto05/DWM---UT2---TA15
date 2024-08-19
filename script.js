const input = document.getElementById('inputText');
const btnAñadir = document.getElementById('addElement');
const btnEliminar = document.getElementById('deleteLast');
const lista = document.getElementById('list');

btnAñadir.addEventListener('click', () => {
    const texto = input.value.trim();

    if (texto !== '') {
        
        const nuevoElemento = document.createElement('li');
        
        nuevoElemento.textContent = texto;
        
        lista.appendChild(nuevoElemento);
        
        input.value = '';
    }
});

btnEliminar.addEventListener('click', () => {
    const lastChild = lista.lastElementChild;

    if (lastChild) {
        lista.removeChild(lastChild);
    }
})
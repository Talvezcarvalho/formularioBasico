const diaInput = document.getElementById('dia');
const mesInput = document.getElementById('mes');
const anoInput = document.getElementById('ano');

diaInput.addEventListener('input',() => {
    if(diaInput.value.length === 2){
        mesInput.focus();
    }
});
mesInput.addEventListener('input',() => {
    if(mesInput.value.length === 2){
        anoInput.focus();
    }
});

function validarData(evento) {
    if(!/^\d*$/.test(evento.target.value)) {
        evento.target.value = evento.target.value.replace(/[^\d]/g, '');
    }
}
diaInput.addEventListener('input', validarData);
mesInput.addEventListener('input', validarData);
anoInput.addEventListener('input', validarData);    
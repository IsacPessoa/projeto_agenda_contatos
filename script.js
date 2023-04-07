const form = document.getElementById('formContact');
const nomes = [];
const numeros = [];

let linhas = ' ';

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato'); 

    if (nomes.includes(inputNomeContato.value) || numeros.includes(parseInt(inputNumeroContato.value))){
        alert(`Contato ou número já cadastrado!`);
    }else {
        
    nomes.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

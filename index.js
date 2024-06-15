const tela = document.getElementById("tela");
let resultadoAnterior = false;
let erroAnterior = false;


function inputTela (input) {
    if(resultadoAnterior || erroAnterior) {
        tela.value = "";
        resultadoAnterior = false;
        erroAnterior = false;
    }
    tela.value += input;
}

function limparTela () {
    tela.value = "";
}   

function calcular () {
    try{
        tela.value = eval(tela.value);
        resultadoAnterior = true;
    }
    catch(error){
        tela.value = "Erro";
        erroAnterior = true;
    }
}

function abrirPopup() {
    let popup = document.getElementById('popup-temas');
    popup.style.display = 'block';
}

function fecharPopup() {
    let popup = document.getElementById('popup-temas');
    popup.style.display = 'none';
}

function setTema(tema) {
    document.body.classList.remove('tema-bosque');
    document.body.classList.remove('tema-cerejeira');
    document.body.classList.remove('tema-acude');
    document.body.classList.remove('tema-areia');
    switch (tema) {
        case 'bosque':
            document.body.classList.add('tema-bosque');
            break;
        case 'cerejeira':
            document.body.classList.add('tema-cerejeira');
            break;
        case 'acude':
            document.body.classList.add('tema-acude');
            break;
        case 'areia':
            document.body.classList.add('tema-areia');
            break;
        default:
            break;
    }
    fecharPopup();
}
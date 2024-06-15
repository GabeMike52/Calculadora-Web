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
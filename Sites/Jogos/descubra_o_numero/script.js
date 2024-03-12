var encontrarNumero = 0;
var tentativas = 0;

function gerarNumero() {
    tentativas = 0;
    encontrarNumero = parseInt (Math.random() * 100);
}
 

function verificarNumero() {
    var digitou = document.getElementById('digitou').value;

    if (digitou > 100 || digitou < 1 ) {
        alert('Aposta inválida');
        document.getElementById('digitou').value = "";
        return;
    }

    if (digitou > encontrarNumero) {
        tentativas++;
        alert('O número para ser encontrado é MENOR');
        document.getElementById('digitou').value = "";
    }
    else if (digitou < encontrarNumero) {
        tentativas++;
        alert('O número para ser encontrado é MAIOR');
        document.getElementById('digitou').value = "";
    }
    else{
        alert("Parabéns você acertou !!! Com "+tentativas+" erros");
        document.getElementById('digitou').value = "";
        gerarNumero();
        
    }
}
gerarNumero();
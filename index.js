function calcularSaldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

function calcularNivel(saldo) {
    let nivel;
    if (saldo <= 10) {
        nivel = "Ferro";
    } else if (saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo <= 50) {
        nivel = "Prata";
    } else if (saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel;
}

let vitorias;
do {
    vitorias = prompt("Quantas vitórias você tem? ");
} while (vitorias < 0);
let derrotas;
do {
    derrotas = prompt("Quantas derrotas você tem? ");
} while (derrotas < 0);

let saldo = calcularSaldo(vitorias, derrotas);
let nivel = calcularNivel(saldo);

console.log("O Herói tem de saldo " + saldo + " e está no nível de " + nivel);
const frm = document.querySelector("form");
const oneTime = document.getElementById("divisor");
const twoTime = document.getElementById("resposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = parseInt(frm.inNumero.value, 10);
    let num1 = 0; // Inicializa a variável num1 com zero

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            num1 += i;
        }
    }

    if (num1 === num) {
        oneTime.innerHTML = `Os divisores foram ${num1}`;
        twoTime.innerHTML = `Parabéns, ${num} é um número perfeito`;
    } else {
        oneTime.innerHTML = `Os divisores foram ${num1}`;
        twoTime.innerHTML = `${num} não é um número perfeito`;
    }
});

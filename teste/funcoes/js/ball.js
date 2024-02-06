let larguraPalco = window.innerWidth;
let alturaPalco = window.innerHeight;
let bolas = [];
let numBolas = 0;

class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10;
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
        this.velx = Math.floor(Math.random() * 2) + 0.5;
        this.vely = Math.floor(Math.random() * 2) + 0.5;
        this.drx = Math.floor((Math.random() * 10) > 5 ? 1 : -1);
        this.dry = Math.floor((Math.random() * 10) > 5 ? 1 : -1);
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000000);
        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id);
        numBolas++;
        num_objetos.innerHTML = numBolas;
    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this);
    }
    remover = () => {
        clearInterval(this.controle);
        bolas = bolas.filter((b) => {
            if (b.id != this.id) {
                return b;
            }
        });
        this.eu.remove();
        numBolas--;
        num_objetos.innerHTML = numBolas;
    }
    desenhar = () => {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bola");
        div.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b});`);
        this.palco.appendChild(div);
    }
    controleBordas = () => {
        if (this.px + this.tam >= larguraPalco) {
            this.drx = -1;
        } else if (this.px <= 0) {
            this.drx = 1;
        }
        if (this.py + this.tam >= alturaPalco) {
            this.dry = -1;
        } else if (this.py <= 0) {
            this.dry = 1;
        }
    }
    controlar = () => {
        this.controleBordas();
        this.px += this.drx * this.velx;
        this.py += this.dry * this.vely;
        this.eu.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b});`);
        if (this.px > larguraPalco || this.py > alturaPalco) {
            this.remover();
        }
    }
}

window.addEventListener("resize", (evt) => {
    larguraPalco = window.innerWidth;
    alturaPalco = window.innerHeight;
});

const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");
const txt_qtde = document.getElementById("txt_qtde");

btn_add.addEventListener("click", (evt) => {
    const qtde = txt_qtde.value;
    for (let i = 0; i < qtde; i++) {
        bolas.push(new Bola(bolas, palco));
    }
});

btn_remover.addEventListener("click", (evt) => {
    bolas.map((b) => {
        b.remover();
    });
});

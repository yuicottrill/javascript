const caixa = document.querySelector("#caixa")
const artist = new Set(["Clairo","NewJeans","Mom Mitski"])
artist.add("KISS OF LIFE")
artist.add("(G)I-dle")
artist.add("Clairo") // Não adiciona, já existe.
console.log(artist)
artist.forEach((e, i)=>{
    console.log(`in your key ${i} receives ${e}`) //Não há indice em Set
})
artist.clear() // limpa tudo

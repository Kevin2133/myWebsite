const url = "https://easycodingkevapi.herokuapp.com/";


window.onload = () => {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const div = document.getElementById("apiRes");
        const lnbr = document.createElement("br");
        var nome = document.createElement("p"), cognome = document.createElement("p"), livello = document.createElement("p");
        console.log(data);
        nome.innerHTML = data.name;
        div.appendChild(nome);
        //div.appendChild(lnbr);
        cognome.innerHTML = data.surname;
        div.appendChild(cognome);
        //div.appendChild(lnbr);
        livello.innerHTML = data.level;
        div.appendChild(livello);
    });
};

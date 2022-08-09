const url = "https://easycodingkevapi.herokuapp.com/";
const div = document.getElementById("apiRes");
const lnbr = document.createElement("br");
var par = document.createElement("p");

window.onload = () => {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        par.innerHTML = data.name;
        div.appendChild(par);
        div.appendChild(lnbr);
        par.innerHTML = data.surname;
        div.appendChild(par);
        div.appendChild(lnbr);
        par.innerHTML = data.level;
        div.appendChild(par);
    });
};

const url = "https://easycodingkevapi.herokuapp.com/";


window.onload = () => {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const div = document.getElementById("apiRes");
        const lnbr = document.createElement("br");
        var par = document.createElement("p");
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

const url = "https://easycodingkevapi.herokuapp.com/";


window.onload = () => {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const div = document.getElementById("apiRes");
        const lnbr = document.createElement("br");
        var name, surname, level = document.createElement("p");
        console.log(data);
        name.innerHTML = data.name;
        div.appendChild(name);
        div.appendChild(lnbr);
        surname.innerHTML = data.surname;
        div.appendChild(surname);
        div.appendChild(lnbr);
        level.innerHTML = data.level;
        div.appendChild(level);
    });
};

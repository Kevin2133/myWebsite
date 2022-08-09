const url = "https://easycodingkevapi.herokuapp.com/";
const div = document.getElementById("apiRes");

window.onload = () => {
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });
};
const btn = document.getElementById("btn")
const sidebar = document.getElementById("sidebar")
const search = document.querySelector(".bx-search")
const home = document.querySelector(".home-content");
btn.onclick = function() {
    sidebar.classList.toggle('active');
    home.classList.toggle("hactive");
}
search.onclick = function() {
    sidebar.classList.toggle('active');
    home.classList.toggle("hactive");

}
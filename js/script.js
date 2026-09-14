document.addEventListener("DOMContentLoaded", function() {
    const d = new Date();
    let text = d.toString();
    document.getElementById("date").innerHTML = text;
});

function darkModeButton() {
    var body = document.body;
    body.classList.toggle("darkMode");

    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        section.classList.toggle("darkMode2");
    });

    var header = document.querySelector("header");
    header.classList.toggle("darkMode3");

    var navigation = document.querySelector("nav");
    navigation.classList.toggle("darkMode4");

    var pageLinks = document.querySelectorAll("a");
    pageLinks.forEach(function(link) {
        link.classList.toggle("darkMode5");
    });
}
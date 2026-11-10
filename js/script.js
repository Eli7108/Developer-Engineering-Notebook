document.addEventListener("DOMContentLoaded", function() {
    //Displays the current date and time
    const d = new Date();
    let text = d.toString();
    document.getElementById("date").innerHTML = text;

    //Adds an event listener to the filter button
    document.querySelectorAll(".filterButton").forEach(button => {
        button.addEventListener('click', () => {
          const content = button.nextElementSibling;
          document.querySelectorAll(".filterContent").forEach(drop => {
            if (drop !== content) drop.style.display = 'none';
          });
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    //Selects all filter buttons and the boxes
    const filterButtons = document.querySelectorAll(".filterContent button");
    const sections = document.querySelectorAll("section");

    //Adds click event listeners to each filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.id; // Get the category from the button's ID

            //Loops through all boxes and toggle their visibility
            sections.forEach(box => {
                if (category === 'all' || box.dataset.category === category) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });

    //blank
    var question1 = document.getElementById("question1 button");
    var question2 = document.getElementById("question2 button");
    var question3 = document.getElementById("question3 button");
    var question4 = document.getElementById("question4 button");
    var question5 = document.getElementById("question5 button");
    var question6 = document.getElementById("question6 button");
    var question7 = document.getElementById("question7 button");
    var question8 = document.getElementById("question8 button");
    var question9 = document.getElementById("question9 button");
    var question10 = document.getElementById("question10 button");
    
});

function darkModeToggle() {
    var body = document.body;
    body.classList.toggle("darkModeBody");

    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        section.classList.toggle("darkModeSection");
    });

    var header = document.querySelector("header");
    header.classList.toggle("darkModeHeader");

    var navigation = document.querySelector("nav");
    navigation.classList.toggle("darkModeNav");

    var pageLinks = document.querySelectorAll("a");
    pageLinks.forEach(function(link) {
        link.classList.toggle("darkModeLink");
    });

    var button = document.querySelector("button");
    button.classList.toggle("darkModeButton");
}
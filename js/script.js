document.addEventListener("DOMContentLoaded", function() {
    const d = new Date();
    let text = d.toString();
    document.getElementById("date").innerHTML = text;
});

document.querySelectorAll('.filterButton').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      document.querySelectorAll('.filterContent').forEach(drop => {
        if (drop !== content) drop.style.display = 'none';
      });
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
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

// Select all filter buttons and the boxes
const filterButtons = document.querySelectorAll('.filterContent button');
const sections = document.querySelectorAll('.up');

// Add click event listeners to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.id; // Get the category from the button's ID

        // Loop through all boxes and toggle their visibility
        sections.forEach(box => {
            if (category === 'all' || box.dataset.category === category) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
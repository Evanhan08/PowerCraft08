// JavaScript for PowerCraft08

// 1. Hamburger menu button
var menuButton = document.getElementById("menu-btn");
var nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");

    // Condition: tell screen readers if the menu is open or closed
    if (nav.classList.contains("open")) {
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.setAttribute("aria-expanded", "false");
    }
});

// 2. the fields that must be filled out in the build request form
var requiredFields = ["name", "email", "idea"];

// 3. Object with a method: the information of the build request
var request = {
    name: "",
    idea: "",
    thankYou: function () {
        return "Thank you " + this.name + "! Your build idea (" + this.idea + ") was received.";
    }
};

var form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function (event) {
        // stops the page from reloading
        event.preventDefault();

        var emptyFields = 0;

        // check each field of the array
        for (var i = 0; i < requiredFields.length; i++) {
            var field = document.getElementById(requiredFields[i]);

            if (field.value.trim() === "") {
                emptyFields = emptyFields + 1;
            }
        }

        // show a warning or the thank you message
        if (emptyFields > 0) {
            alert("Please fill out all the required fields.");
        } else {
            request.name = document.getElementById("name").value;
            request.idea = document.getElementById("idea").value;
            alert(request.thankYou());
            form.reset();
        }
    });
}

// 4. Filter buttons of the videos page (loops and conditions)
var filterButtons = document.querySelectorAll(".filter-buttons button");
var videoCards = document.querySelectorAll(".card");

for (var b = 0; b < filterButtons.length; b++) {
    filterButtons[b].addEventListener("click", function () {
        var chosen = this.getAttribute("data-filter");

        // only the clicked button looks active
        for (var x = 0; x < filterButtons.length; x++) {
            filterButtons[x].classList.remove("active");
        }
        this.classList.add("active");

        // show the cards of the chosen category and hide the others
        for (var y = 0; y < videoCards.length; y++) {
            if (chosen === "all" || videoCards[y].getAttribute("data-category") === chosen) {
                videoCards[y].style.display = "block";
            } else {
                videoCards[y].style.display = "none";
            }
        }
    });
}

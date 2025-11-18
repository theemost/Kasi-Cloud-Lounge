const navItems = ["Home", 'Packages', 'Bookings', 'About', "Contact", 'Vibes' ];

//Get navbar element
const nav = document.getElementById("navbar");

//Create logo container
const logoContainer = document.createElement("div");
logoContainer.className = "logo";       

const logoImage = document.createElement("img")
logoImage.src = "images/logo1.jpg"; 
logoImage.alt = "Website Logo";

logoContainer.appendChild(logoImage);
nav.appendChild(logoContainer);

// Create hamburger button
const menuToggle = document.createElement("input");
menuToggle.type = "checkbox";
menuToggle.id = "menu-toggle";
nav.appendChild(menuToggle);

const hamburgerLabel = document.createElement("label");
hamburgerLabel.setAttribute("for", "menu-toggle");
hamburgerLabel.className = "menu-btn";

// Add the three bars
for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburgerLabel.appendChild(span);
}
nav.appendChild(hamburgerLabel);

// Create a <ul> element
const ul = document.createElement("ul");
ul.className = "nav-links";

// Loop through navItems and create <li><a></a></li>
navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item;
    if (item == 'Home' ) {
        item = 'index';
    }
    a.href = "" + item.toLowerCase() + ".html";  // Example: #home, #about
    li.appendChild(a);
ul.appendChild(li);
});

nav.appendChild(ul);

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu-toggle").checked = false;
})
});

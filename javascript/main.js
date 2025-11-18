const navItems = ["Home", "Packages", "Bookings", "About", "Contact", "Vibes" ];

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
        item = 'Index';
    }
    a.href = "" + item.toLowerCase() + ".html"; 
    li.appendChild(a);
ul.appendChild(li);
});

nav.appendChild(ul);

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu-toggle").checked = false;
})
});

// Array of images
const images = [
  "images/2guys-smoking.jpg",
  "images/guy-smoking-hookah.jpg",
  "images/guy2-smoking.jpg",
  "images/shisha-lounge-entrance.jpg",
  "images/yung-swiss-lookalike.jpg",
  "images/man-smoking-in-shisha-bar.jpg",
  "images/coal lighting.jpg"
];

// Containers for the images
const contentContainer = document.getElementById("content");
const imageContainer = document.createElement("div")
imageContainer.className = "image";

// Loop through the array and create img elements
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;                             
    img.alt = "Vibes Image";   
    img.loading = "lazy";

    img.onload = () => img.classList.add("loaded");  // Fade-in

    img.addEventListener("click", () => openLightbox(index)); // Lightbox              
    
    imageContainer.appendChild(img);        
});

contentContainer.appendChild(imageContainer);   

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Create Prev/Next buttons
const prevBtn = document.createElement("button");
prevBtn.id = "prevBtn";
prevBtn.className = "nav-btn";
prevBtn.textContent = "❮ Prev";

const nextBtn = document.createElement("button");
nextBtn.id = "nextBtn";
nextBtn.className = "nav-btn";
nextBtn.textContent = "Next ❯";

// Append buttons to lightbox
lightbox.appendChild(prevBtn);
lightbox.appendChild(nextBtn);

// Current index of image
let currentIndex = 0;

// Open lightbox function
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = "flex";
}


// Navigate to next image
function nextImage(e) {
    e.stopPropagation(); // prevent closing
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
}

// Navigate to previous image
function prevImage(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
}

// Event listeners for buttons
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Close lightbox when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navItems = ["Home", "Packages", "Bookings", "About", "Contact", "Vibes" ];

    //Get navbar element
    const nav = document.getElementById("navbar");
    if (nav) {
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
    }

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
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    let prevBtn, nextBtn;
    let currentIndex = 0;

    if (contentContainer) {
        const imageContainer = document.createElement("div")
        imageContainer.className = "image";

        // Loop through the array and create img elements
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;                             
            img.alt = "Vibes Image";   
            img.loading = "lazy";
            img.onload = () => img.classList.add("loaded");  // Fade-in

            img.addEventListener("click", () => {
                if (lightbox && lightboxImg) {
                    lightboxImg.src = src;
                    lightbox.style.display = "flex";
                    currentIndex = index;
                }
            });

            imageContainer.appendChild(img);        
        });

        contentContainer.appendChild(imageContainer);   
    }   

    if (lightbox) {
        // Create Prev/Next buttons
        prevBtn = document.createElement("button");
        prevBtn.id = "prevBtn";
        prevBtn.className = "nav-btn";
        prevBtn.textContent = "❮ Prev";

        nextBtn = document.createElement("button");
        nextBtn.id = "nextBtn";
        nextBtn.className = "nav-btn";
        nextBtn.textContent = "Next ❯";

        // Append buttons to lightbox
        lightbox.appendChild(prevBtn);
        lightbox.appendChild(nextBtn);

        // Event listeners for buttons
        prevBtn.addEventListener("click", prevImage);
        nextBtn.addEventListener("click", nextImage);

        // Close lightbox when clicking outside image
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // Open lightbox function
    function openLightbox(index) {
        if (lightbox && lightboxImg) {
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
            lightbox.style.display = "flex";
        }
    }

    // Navigate to next image
    function nextImage(e) {
        if (lightboxImg) {
            e.stopPropagation(); // prevent closing
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex];
        }
    }

    // Navigate to previous image
    function prevImage(e) {
        if (lightboxImg) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex];
        }
    }

    //Form validation
    // Real-time validation
    const contactForm = document.getElementById("contact-form");
    const bookingForm = document.getElementById("booking-form");
    const toast = document.getElementById("toast");

    function showToast(message, type = "error") {
        if (!toast) return;
        toast.innerHTML = message;

        // Remove old classes
        toast.classList.remove("success", "error");
        
        // Add new class
        toast.classList.add(type, "show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000); // Hide after 3 seconds
    }

    // Validate Contact Form
    if (contactForm && toast) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page refresh

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "") return showToast("Name is required!");
            if (!emailPattern.test(email)) return showToast("Invalid email address!");
            if (message.length < 10) return showToast("Message must be at least 10 characters!");

            showToast("Message sent successfully! 🚀", "success");
            contactForm.reset();
        });
    }

    // Validate Booking Form
    if (bookingForm && toast) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page refresh

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const guests = document.getElementById("guests").value;

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "") return showToast("Name is required!");
            if (!emailPattern.test(email)) return showToast("Invalid email address!");
            if (phone === "") return showToast("Phone number is required!");
            if (!date) return showToast("Please select a date!");
            if (!time) return showToast("Please select a time!");
            if (guests < 1) return showToast("Number of guests must be at least 1!");

            showToast("Booking submitted successfully! ✅", "success");
            bookingForm.reset();
        });
    }
});

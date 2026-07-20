// =====================================================
// CAMPUS MARKET SA
// JavaScript
// =====================================================

// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Search Button
// ===============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        let searchValue = searchInput.value.trim();

        if (searchValue === "") {

            alert("Please enter something to search.");

        } else {

            alert("Searching for: " + searchValue);

            // Later this will redirect or filter products
            // Example:
            // window.location.href = "marketplace.html?search=" + encodeURIComponent(searchValue);

        }

    });

}

// ===============================
// Search with Enter Key
// ===============================

if (searchInput) {

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            searchBtn.click();

        }

    });

}

// ===============================
// Animated Statistics Counter
// ===============================

const counters = document.querySelectorAll(".counter");

const speed = 150;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = Number(counter.getAttribute("data-target"));

        const current = Number(counter.innerText.replace(/,/g, ""));

        const increment = Math.ceil(target / speed);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 15);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});
// ==========================================
// CAMPUS MARKET SA
// REGISTER PAGE JAVASCRIPT
// ==========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const university = document.getElementById("university").value;
        const studentNumber = document.getElementById("studentNumber").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // ==========================
        // Email Validation
        // ==========================

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            return;

        }

        // ==========================
        // Phone Validation
        // ==========================

        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            alert("Phone number must contain exactly 10 digits.");
            return;

        }

        // ==========================
        // University Validation
        // ==========================

        if (university === "") {

            alert("Please select your university.");
            return;

        }

        // ==========================
        // Student Number Validation
        // ==========================

        if (studentNumber === "") {

            alert("Please enter your student number.");
            return;

        }

        // ==========================
        // Password Validation
        // ==========================

        if (password.length < 8) {

            alert("Password must be at least 8 characters long.");
            return;

        }

        // ==========================
        // Confirm Password
        // ==========================

        if (password !== confirmPassword) {

            alert("Passwords do not match.");
            return;

        }

        // ==========================
        // Success
        // ==========================

        alert("🎉 Registration Successful!\n\nWelcome to Campus Market SA!");

        registerForm.reset();

    });

}

// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

const showPassword = document.getElementById("showPassword");

if (showPassword) {

    showPassword.addEventListener("change", function () {

        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");

        if (this.checked) {

            password.type = "text";
            confirmPassword.type = "text";

        } else {

            password.type = "password";
            confirmPassword.type = "password";

        }

    });

}
// ==========================================
// LOGIN FORM VALIDATION
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        // ==========================
        // Email Validation
        // ==========================

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            return;

        }

        // ==========================
        // Password Validation
        // ==========================

        if (password === "") {

            alert("Please enter your password.");
            return;

        }

        if (password.length < 8) {

            alert("Password must be at least 8 characters long.");
            return;

        }

        // ==========================
        // Login Successful
        // ==========================

        alert("Login Successful!\n\nWelcome back to Campus Market SA.");

        // Redirect to marketplace page
        window.location.href = "marketplace.html";

    });

}

// ==========================================
// SHOW / HIDE LOGIN PASSWORD
// ==========================================

const showLoginPassword = document.getElementById("showLoginPassword");

if (showLoginPassword) {

    showLoginPassword.addEventListener("change", function() {

        const password = document.getElementById("loginPassword");

        if (this.checked) {

            password.type = "text";

        } else {

            password.type = "password";

        }

    });

}
// Shopping Cart

let cart = 0;

const cartButtons = document.querySelectorAll(".btn-cart");

const cartCount = document.getElementById("cartCount");

cartButtons.forEach(button => {

    button.addEventListener("click", function(){

        cart++;

        cartCount.textContent = cart;

        alert("Product added to cart!");

    });

});
// ==========================================
// SELL ITEM FORM VALIDATION
// ==========================================

const sellForm = document.getElementById("sellForm");

if (sellForm) {

    sellForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const productName = document.getElementById("productName").value.trim();
        const category = document.getElementById("category").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value.trim();
        const university = document.getElementById("sellerUniversity").value;
        const phone = document.getElementById("sellerPhone").value.trim();
        const email = document.getElementById("sellerEmail").value.trim();
        const image = document.getElementById("productImage").files.length;

        // Product Name
        if (productName === "") {

            alert("Please enter the product name.");
            return;

        }

        // Category
        if (category === "") {

            alert("Please select a category.");
            return;

        }

        // Price
        if (price === "" || Number(price) <= 0) {

            alert("Please enter a valid price.");
            return;

        }

        // Description
        if (description === "") {

            alert("Please enter a product description.");
            return;

        }

        // University
        if (university === "") {

            alert("Please select your university.");
            return;

        }

        // Phone Number
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            alert("Phone number must contain exactly 10 digits.");
            return;

        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");
            return;

        }

        // Image
        if (image === 0) {

            alert("Please upload a product image.");
            return;

        }

        // Success
        alert("🎉 Your product has been posted successfully!\n\nThank you for using Campus Market SA.");

        sellForm.reset();

    });

}


// =====================================================
// End of JavaScript
// =====================================================
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
    });
    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Update Nav Links
    document.querySelectorAll('.top-nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('nav-' + sectionId).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleAbstract(btn) {
    // Find the span containing the hidden text (previous sibling)
    var moreText = btn.previousElementSibling;

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    }
}

/* --- FILTER FUNCTION --- */
function filterGallery(category, btn) {
    // 1. Remove active class from all buttons
    let buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // 2. Add active class to clicked button
    btn.classList.add('active');

    // 3. Filter Images
    let items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hide-item');
        } else {
            if (item.getAttribute('data-category') === category) {
                item.classList.remove('hide-item');
            } else {
                item.classList.add('hide-item');
            }
        }
    });
}

/* --- LIGHTBOX FUNCTIONS --- */
function openLightbox(imgElement) {
    var modal = document.getElementById("lightbox-modal");
    var modalImg = document.getElementById("lightbox-img");

    modal.style.display = "flex"; // Use flex to center easily
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";

    modalImg.src = imgElement.src; // Set popup image to clicked image
}

function closeLightbox(event) {
    if (event.target.id === "lightbox-modal" || event.target.classList.contains("close-lightbox")) {
        var modal = document.getElementById("lightbox-modal");
        modal.style.display = "none";
    }
}

/* --- IN-PLACE BLOG TOGGLE FUNCTIONS --- */
function toggleBlog(blogId) {
    var content = document.getElementById(blogId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Function to open a specific blog and scroll to it (used from the Home page)
function openSpecificBlog(blogId) {
    var content = document.getElementById(blogId);
    content.style.display = "block"; // Force it open

    // Smooth scroll to the blog post
    setTimeout(() => {
        content.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}
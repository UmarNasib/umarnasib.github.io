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
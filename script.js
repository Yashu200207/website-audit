document.querySelectorAll('section').forEach((section) => {
    section.addEventListener('click', () => {
        // Toggle section content
        section.classList.toggle('expanded');
    });
});
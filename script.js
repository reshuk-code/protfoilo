document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;
    const navbar = document.getElementById('nav'); // Use the ID selector to get the navbar element
    const myProjectSection = document.getElementById('my-project');

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode'); // Apply dark mode to the navbar
        myProjectSection.classList.add('dark-mode');
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleButton.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            navbar.classList.remove('dark-mode'); // Remove dark mode from the navbar
            myProjectSection.classList.remove('dark-mode');
            themeToggleButton.innerHTML = '<i class="fa-duotone fa-solid fa-cloud-moon fa-beat-fade"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            navbar.classList.add('dark-mode'); // Add dark mode to the navbar
            myProjectSection.classList.add('dark-mode');
            themeToggleButton.innerHTML = '<i class="fa-sharp-duotone fa-solid fa-cloud-sun fa-beat-fade"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
});

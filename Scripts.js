// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = !body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

    // Refresh Google Translate widget
    if (window.google && google.translate) {
        setTimeout(() => {
            google.translate.TranslateElement().refresh();
        }, 100);
    }
}

// Initialize dark mode
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    // Add event listener
    darkModeToggle.addEventListener('click', toggleDarkMode);
});
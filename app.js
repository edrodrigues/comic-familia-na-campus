let currentPanel = 1;
const totalPanels = 8;

function changePanel(direction) {
    const current = document.getElementById(`panel${currentPanel}`);
    current.classList.remove('active');

    currentPanel += direction;
    const next = document.getElementById(`panel${currentPanel}`);
    next.classList.add('active');

    updateButtons();
}

function updateButtons() {
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    prevButton.disabled = (currentPanel === 1);
    nextButton.disabled = (currentPanel === totalPanels);
}

// Initialize buttons state
document.addEventListener('DOMContentLoaded', updateButtons);

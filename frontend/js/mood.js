export function initMoodTracker() {
    const moodScale = document.getElementById('mood-scale');
    moodScale.addEventListener('click', (e) => {
        if (e.target.classList.contains('mood-option')) {
            const level = e.target.dataset.level;
            localStorage.setItem('currentMood', level);
        }
    });
}

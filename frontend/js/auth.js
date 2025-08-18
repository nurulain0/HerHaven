document.addEventListener('DOMContentLoaded', function() {
    // Load dashboard content by default
    loadDashboard();
    
    // Navigation click handlers
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.nav-links li').forEach(item => {
                item.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // Load appropriate content
            const page = this.getAttribute('href').replace('.html', '');
            switch(page) {
                case 'dashboard':
                    loadDashboard();
                    break;
                case 'period':
                    loadPeriodTracker();
                    break;
                case 'pregnancy':
                    loadPregnancyTracker();
                    break;
                case 'mood':
                    loadMoodTracker();
                    break;
                case 'journal':
                    loadJournal();
                    break;
                case 'profile':
                    loadProfile();
                    break;
            }
        });
    });
});

function loadDashboard() {
    fetch('pages/dashboard/dashboard.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app-content').innerHTML = html;
            initDashboard();
        });
}

function loadPeriodTracker() {
    fetch('pages/period/period.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app-content').innerHTML = html;
            initPeriodTracker();
        });
}

function loadPregnancyTracker() {
    fetch('pages/pregnancy/pregnancy.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app-content').innerHTML = html;
            initPregnancyTracker();
        });
}

function loadMoodTracker() {
    fetch('pages/mood/mood.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app-content').innerHTML = html;
            initMoodTracker();
        });
}

function loadJournal() {
    fetch('pages/journal/journal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app-content').innerHTML = html;
            initJournal();
        });
}

function loadProfile() {
    fetch('pages/profile/profile.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('app-content').innerHTML = html;
            initProfile();
        });
}

function initDashboard() {
    // Load dashboard data from API
    fetchData('/api/dashboard').then(data => {
        renderCycleCard(data.cycle);
        renderMoodChart(data.moodData);
        renderQuickLog();
    });
}

function fetchData(endpoint) {
    return fetch(endpoint)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

// Other initialization functions would be here...
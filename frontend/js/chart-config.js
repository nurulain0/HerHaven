function renderMoodChart(data) {
    const ctx = document.getElementById('moodChart').getContext('2d');
    
    // Sample data - in a real app, this would come from your API
    const moodData = data || {
        labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
        datasets: [{
            label: 'Mood Level',
            data: [3, 4, 2, 5, 4, 3, 4],
            borderColor: 'var(--accent-pink)',
            backgroundColor: 'rgba(255, 133, 162, 0.1)',
            tension: 0.3,
            fill: true,
            borderWidth: 2
        }]
    };
    
    return new Chart(ctx, {
        type: 'line',
        data: moodData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    suggestedMin: 1,
                    suggestedMax: 5,
                    ticks: {
                        callback: function(value) {
                            const moods = ['', 'Very Low', 'Low', 'Medium', 'High', 'Very High'];
                            return moods[value];
                        }
                    }
                }
            }
        }
    });
}

function renderCycleProgress(day, totalDays) {
    const progress = (day / totalDays) * 100;
    document.getElementById('cycle-progress').style.width = `${progress}%`;
    
    // Update phase information
    const phaseElement = document.getElementById('cycle-phase');
    if (day <= 5) {
        phaseElement.textContent = 'Menstruation';
    } else if (day > 5 && day <= 14) {
        phaseElement.textContent = 'Follicular';
    } else if (day > 14 && day <= 17) {
        phaseElement.textContent = 'Ovulation';
    } else {
        phaseElement.textContent = 'Luteal';
    }
    
    // Update next period prediction
    const nextPeriodElement = document.getElementById('next-period');
    const daysLeft = totalDays - day;
    nextPeriodElement.textContent = daysLeft > 0 
        ? `Next period in ${daysLeft} days` 
        : 'Your period should start today';
}
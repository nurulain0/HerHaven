document.addEventListener('DOMContentLoaded', function() {
    const periodForm = document.getElementById('period-form');
    
    periodForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            startDate: document.getElementById('start-date').value,
            flow: document.getElementById('flow-level').value,
            symptoms: document.getElementById('symptoms').value
        };

        try {
            const response = await fetch('http://localhost:8000/backend/api/period.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.success ? 'Logged successfully!' : 'Error: ' + result.error);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

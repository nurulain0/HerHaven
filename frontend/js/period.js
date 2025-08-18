export function initPeriodTracker() {
    document.getElementById('log-period').addEventListener('click', async () => {
        const response = await fetch('/backend/api/period.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                startDate: new Date().toISOString().split('T')[0],
                flow: document.getElementById('flow-level').value
            })
        });
        // Handle response
    });
}

// js/chatbot.js

// ... (existing code) ...

const handleBotResponse = (userMessage) => {
    let response = "I'm still learning! For now, I can answer questions about: **Cycle Tracking**, **Pregnancy**, **Journaling**, **Articles**, or **Reminders**. What would you like to know?";

    const msgLower = userMessage.toLowerCase();

    // ... (existing bot response logic) ...

    setTimeout(() => {
        addMessage(response, 'bot');

        // --- NEW: Save chat log to backend ---
        // Simulate user ID (replace with actual user ID from your authentication system)
        const userId = localStorage.getItem('herhavenUserEmail') || 'guest_user'; // Using email as a simple ID for now

        const chatLogData = {
            userId: userId,
            question: userMessage,
            botResponse: response
        };

        fetch('api/chatbotlogs.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(chatLogData),
        })
        .then(res => res.json())
        .then(logResult => {
            if (logResult.success) {
                console.log('Chat log saved:', logResult.message);
            } else {
                console.error('Error saving chat log:', logResult.message);
            }
        })
        .catch(error => {
            console.error('Network error saving chat log:', error);
        });
        // --- END NEW ---

    }, 800);
};

// ... (existing code) ...

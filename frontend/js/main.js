import { initRouter } from './router.js';
import { setupAuth } from './auth.js';
import { initMoodTracker } from './mood.js';
import { initPeriodTracker } from './period.js';

document.addEventListener('DOMContentLoaded', () => {
    setupAuth();
    initRouter();

document.addEventListener('DOMContentLoaded', () => {
    initMoodTracker();
    initPeriodTracker();
});

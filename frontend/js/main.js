import { initRouter } from './router.js';
import { setupAuth } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    setupAuth();
    initRouter();
});

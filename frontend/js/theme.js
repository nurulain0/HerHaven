/* ========================================
   THEME MANAGER FOR HERHAVEN
   Handles dark mode toggle and persistence
   ======================================== */

class ThemeManager {
    constructor() {
        this.THEME_KEY = 'herhaven-theme';
        this.LIGHT_THEME = 'light';
        this.DARK_THEME = 'dark';
        this.currentTheme = this.getStoredTheme() || this.getSystemPreference();
        
        // Initialize theme on page load
        this.init();
    }

    /**
     * Initialize the theme manager
     */
    init() {
        // Apply the stored or system theme immediately to prevent flash
        this.applyTheme(this.currentTheme);
        
        // Set up event listeners when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
        
        // Listen for system theme changes
        this.watchSystemTheme();
    }

    /**
     * Get the stored theme from localStorage
     * @returns {string|null} The stored theme or null
     */
    getStoredTheme() {
        try {
            return localStorage.getItem(this.THEME_KEY);
        } catch (error) {
            console.warn('Unable to access localStorage:', error);
            return null;
        }
    }

    /**
     * Get the system's preferred color scheme
     * @returns {string} 'light' or 'dark'
     */
    getSystemPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return this.DARK_THEME;
        }
        return this.LIGHT_THEME;
    }

    /**
     * Store the theme preference in localStorage
     * @param {string} theme - The theme to store
     */
    storeTheme(theme) {
        try {
            localStorage.setItem(this.THEME_KEY, theme);
        } catch (error) {
            console.warn('Unable to save theme to localStorage:', error);
        }
    }

    /**
     * Apply the theme to the document
     * @param {string} theme - The theme to apply
     */
    applyTheme(theme) {
        const root = document.documentElement;
        
        if (theme === this.DARK_THEME) {
            root.setAttribute('data-theme', 'dark');
            this.currentTheme = this.DARK_THEME;
        } else {
            root.removeAttribute('data-theme');
            this.currentTheme = this.LIGHT_THEME;
        }
        
        // Update toggle button if it exists
        this.updateToggleButton();
        
        // Dispatch custom event for other components to react
        this.dispatchThemeChangeEvent(theme);
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === this.LIGHT_THEME 
            ? this.DARK_THEME 
            : this.LIGHT_THEME;
        
        this.applyTheme(newTheme);
        this.storeTheme(newTheme);
    }

    /**
     * Set up event listeners for theme toggle buttons
     */
    setupEventListeners() {
        // Find all theme toggle buttons
        const toggleButtons = document.querySelectorAll('.theme-toggle-switch, .theme-toggle-btn');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        });
        
        // Keyboard accessibility
        toggleButtons.forEach(button => {
            button.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleTheme();
                }
            });
            
            // Make sure buttons are focusable
            if (!button.hasAttribute('tabindex')) {
                button.setAttribute('tabindex', '0');
            }
        });
        
        // Update the initial state of toggle buttons
        this.updateToggleButton();
    }

    /**
     * Update the visual state of toggle buttons
     */
    updateToggleButton() {
        const toggleContainers = document.querySelectorAll('.theme-toggle-container');
        
        toggleContainers.forEach(container => {
            const isDark = this.currentTheme === this.DARK_THEME;
            container.setAttribute('aria-label', 
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
            );
        });
    }

    /**
     * Watch for system theme changes
     */
    watchSystemTheme() {
        if (window.matchMedia) {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            darkModeMediaQuery.addEventListener('change', (e) => {
                // Only update if user hasn't set a manual preference
                if (!this.getStoredTheme()) {
                    const newTheme = e.matches ? this.DARK_THEME : this.LIGHT_THEME;
                    this.applyTheme(newTheme);
                }
            });
        }
    }

    /**
     * Dispatch a custom event when theme changes
     * @param {string} theme - The new theme
     */
    dispatchThemeChangeEvent(theme) {
        const event = new CustomEvent('themechange', {
            detail: {
                theme: theme,
                isDark: theme === this.DARK_THEME
            }
        });
        window.dispatchEvent(event);
    }

    /**
     * Get the current theme
     * @returns {string} Current theme name
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Check if dark mode is active
     * @returns {boolean} True if dark mode is active
     */
    isDarkMode() {
        return this.currentTheme === this.DARK_THEME;
    }
}

// Create a global instance
const themeManager = new ThemeManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}

// Make available globally
window.ThemeManager = ThemeManager;
window.themeManager = themeManager;

/* ========================================
   HELPER FUNCTIONS
   ======================================== */

/**
 * Create a theme toggle button dynamically
 * @param {string} containerId - ID of the container to append the toggle to
 */
function createThemeToggle(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with ID "${containerId}" not found`);
        return;
    }

    const toggleHTML = `
        <div class="theme-toggle-container" role="button" aria-label="Toggle theme">
            <span class="theme-toggle-icon sun">☀️</span>
            <div class="theme-toggle-switch">
                <div class="theme-toggle-slider"></div>
            </div>
            <span class="theme-toggle-icon moon">🌙</span>
        </div>
    `;

    container.innerHTML = toggleHTML;
    themeManager.setupEventListeners();
}

/**
 * Listen for theme changes
 * @param {Function} callback - Function to call when theme changes
 */
function onThemeChange(callback) {
    window.addEventListener('themechange', (e) => {
        callback(e.detail.theme, e.detail.isDark);
    });
}

// Export helper functions
window.createThemeToggle = createThemeToggle;
window.onThemeChange = onThemeChange;

/* ========================================
   USAGE EXAMPLES
   ========================================
   
   1. The theme is automatically initialized on page load
   
   2. To manually toggle theme:
      themeManager.toggleTheme();
   
   3. To check current theme:
      const isDark = themeManager.isDarkMode();
   
   4. To listen for theme changes:
      onThemeChange((theme, isDark) => {
          console.log('Theme changed to:', theme);
      });
   
   5. To create a toggle button dynamically:
      createThemeToggle('toggle-container-id');
   
   ======================================== */

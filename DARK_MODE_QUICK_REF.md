# 🚀 Dark Mode Quick Reference

## 3-Step Implementation for Any Page

### Step 1: Add CSS (in `<head>`)
```html
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/theme.css">
<link rel="stylesheet" href="../css/dark-mode.css">
```

### Step 2: Add Toggle Button (in navigation/sidebar)
```html
<div class="theme-toggle-container" role="button" aria-label="Toggle dark mode" tabindex="0">
    <span class="theme-toggle-icon sun">☀️</span>
    <div class="theme-toggle-switch">
        <div class="theme-toggle-slider"></div>
    </div>
    <span class="theme-toggle-icon moon">🌙</span>
</div>
```

### Step 3: Add JavaScript (before closing `</body>`)
```html
<script src="../js/theme.js"></script>
```

---

## 🎨 CSS Variables Cheat Sheet

### Most Used Colors
```css
/* Backgrounds */
--bg-primary      /* Main background */
--bg-card         /* Cards, panels */
--bg-sidebar      /* Navigation */

/* Text */
--text-primary    /* Main text */
--text-secondary  /* Less important text */

/* Brand */
--primary-pink    /* Main brand color */
--accent-pink     /* Accents, highlights */

/* Borders */
--border-light    /* Subtle borders */
--border-medium   /* Standard borders */
```

### Usage Example
```css
.my-element {
    background-color: var(--bg-card);
    color: var(--text-primary);
    border: 1px solid var(--border-light);
}
```

---

## 🔧 JavaScript API

```javascript
// Check if dark mode is active
themeManager.isDarkMode()

// Toggle theme
themeManager.toggleTheme()

// Get current theme name
themeManager.getCurrentTheme()

// Listen for changes
onThemeChange((theme, isDark) => {
    console.log('New theme:', theme);
})
```

---

## ✅ Complete Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page - HerHaven</title>
    
    <!-- CSS -->
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/theme.css">
    <link rel="stylesheet" href="../css/dark-mode.css">
</head>
<body>
    <div class="app-container">
        <!-- Sidebar -->
        <nav class="main-nav">
            <div class="nav-header">
                <h1>HerHaven</h1>
            </div>
            
            <!-- Dark Mode Toggle -->
            <div class="theme-toggle-container" role="button" aria-label="Toggle dark mode" tabindex="0">
                <span class="theme-toggle-icon sun">☀️</span>
                <div class="theme-toggle-switch">
                    <div class="theme-toggle-slider"></div>
                </div>
                <span class="theme-toggle-icon moon">🌙</span>
            </div>
            
            <!-- Nav Links -->
            <ul class="nav-links">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </nav>

        <!-- Content -->
        <main class="content-area">
            <h1>Your Content Here</h1>
        </main>
    </div>

    <!-- Scripts - theme.js MUST be first -->
    <script src="../js/theme.js"></script>
    <script src="../js/your-other-scripts.js"></script>
</body>
</html>
```

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Theme doesn't save | Enable localStorage in browser |
| Flash of wrong theme | Load theme.js before other scripts |
| Toggle not working | Check console for errors |
| Colors not changing | Use CSS variables, not hardcoded colors |

---

## 📁 File Locations

```
frontend/
├── css/
│   ├── dark-mode.css      ← Dark theme styles
│   ├── main.css           ← Updated with variables
│   └── theme.css          ← Updated with variables
├── js/
│   └── theme.js           ← Theme management
└── html/
    ├── dashboard-complete.html   ← Example
    └── period-complete.html      ← Example
```

---

## 🎯 Key Points to Remember

1. ✅ Always use CSS variables for colors
2. ✅ Load theme.js FIRST (prevents flash)
3. ✅ Add toggle button to every page
4. ✅ Test in both light and dark modes
5. ✅ Keep accessibility in mind

---

## 📞 Need Help?

See full documentation: `DARK_MODE_GUIDE.md`

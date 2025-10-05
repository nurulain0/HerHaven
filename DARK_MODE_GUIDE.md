# 🌓 Dark Mode Implementation Guide

## Overview
This document explains the dark mode feature implementation for HerHaven. The dark mode system is clean, maintainable, and easy to extend.

---

## 📁 File Structure

### New Files Added:
1. **`frontend/css/dark-mode.css`** - All dark mode styles and variables
2. **`frontend/js/theme.js`** - Theme management logic and toggle functionality
3. **`frontend/html/dashboard-complete.html`** - Complete dashboard with dark mode
4. **`frontend/html/period-complete.html`** - Complete period tracker with dark mode

### Modified Files:
1. **`frontend/css/main.css`** - Updated to use CSS custom properties
2. **`frontend/css/theme.css`** - Updated to use CSS custom properties
3. **`frontend/index.html`** - Added dark mode toggle and script

---

## 🎨 How It Works

### CSS Variable System
The implementation uses CSS custom properties (variables) for theming:

**Light Mode (Default):**
```css
:root {
    --bg-primary: #FFFFFF;
    --text-primary: #333333;
    --primary-pink: #FFD6E0;
    /* ... more variables */
}
```

**Dark Mode:**
```css
[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --text-primary: #e5e5e5;
    --primary-pink: #FF85A2;
    /* ... more variables */
}
```

### Theme Toggle System
The `theme.js` file provides:
- ✅ Automatic theme detection (system preference)
- ✅ Theme persistence (localStorage)
- ✅ Smooth transitions
- ✅ No flash on page load
- ✅ Keyboard accessibility

---

## 🚀 Implementation Steps

### For Existing Pages:

#### Step 1: Add CSS Files
Add these lines in the `<head>` section:
```html
<link rel="stylesheet" href="../css/main.css">
<link rel="stylesheet" href="../css/theme.css">
<link rel="stylesheet" href="../css/dark-mode.css">
```

#### Step 2: Add Dark Mode Toggle Button
Add this HTML in your navigation/sidebar:
```html
<div class="theme-toggle-container" role="button" aria-label="Toggle dark mode" tabindex="0">
    <span class="theme-toggle-icon sun">☀️</span>
    <div class="theme-toggle-switch">
        <div class="theme-toggle-slider"></div>
    </div>
    <span class="theme-toggle-icon moon">🌙</span>
</div>
```

#### Step 3: Add JavaScript
Add this script **BEFORE** other scripts:
```html
<script src="../js/theme.js"></script>
```

---

## 🎯 Usage Examples

### Check Current Theme
```javascript
const isDark = themeManager.isDarkMode();
console.log('Dark mode:', isDark);
```

### Toggle Theme Programmatically
```javascript
themeManager.toggleTheme();
```

### Listen for Theme Changes
```javascript
onThemeChange((theme, isDark) => {
    console.log('Theme changed to:', theme);
    // Update your components
});
```

### Create Toggle Dynamically
```javascript
createThemeToggle('container-id');
```

---

## 🎨 Color Variables Reference

### Background Colors
- `--bg-primary` - Main background
- `--bg-secondary` - Secondary background
- `--bg-tertiary` - Tertiary background
- `--bg-card` - Card backgrounds
- `--bg-sidebar` - Sidebar background

### Text Colors
- `--text-primary` - Primary text
- `--text-secondary` - Secondary text
- `--text-tertiary` - Tertiary/muted text

### Brand Colors
- `--primary-pink` - Primary brand color
- `--secondary-pink` - Secondary brand color
- `--accent-pink` - Accent color

### Border Colors
- `--border-light` - Light borders
- `--border-medium` - Medium borders
- `--border-dark` - Dark borders

### Interactive States
- `--hover-bg` - Hover background
- `--active-bg` - Active/pressed state
- `--focus-ring` - Focus ring color

---

## 📋 Pages Updated

### ✅ Completed Pages:
1. **index.html** - Landing page with dark mode toggle
2. **dashboard-complete.html** - Full dashboard implementation
3. **period-complete.html** - Period tracker with dark mode

### 🔄 To Be Updated:
The following pages need the 3-step implementation:
- `page2.html` (Mood Tracker)
- `page3.html` (Journal)
- `page4.html` (Pregnancy)
- `page5.html` (Health Metrics)
- `page6.html` (Settings)

---

## 🔧 Customization

### Adding New Colors
To add new theme colors, update both light and dark mode:

**In main.css (Light Mode):**
```css
:root {
    --my-new-color: #FF0000;
}
```

**In dark-mode.css (Dark Mode):**
```css
[data-theme="dark"] {
    --my-new-color: #CC0000;
}
```

### Styling New Components
Use CSS variables for all colors:
```css
.my-component {
    background-color: var(--bg-card);
    color: var(--text-primary);
    border: 1px solid var(--border-light);
}
```

The component will automatically adapt to dark mode! 🎉

---

## ♿ Accessibility Features

- ✅ Keyboard navigation support (Tab, Enter, Space)
- ✅ ARIA labels for screen readers
- ✅ Focus states for all interactive elements
- ✅ Sufficient color contrast in both modes
- ✅ Smooth transitions for reduced motion

---

## 🐛 Troubleshooting

### Theme Doesn't Persist
**Issue:** Theme resets on page refresh  
**Solution:** Check if localStorage is enabled in browser

### Flash of Light Mode
**Issue:** Brief light mode flash on dark mode  
**Solution:** Ensure `theme.js` is loaded **before** other scripts

### Toggle Not Working
**Issue:** Clicking toggle does nothing  
**Solution:** Check if `theme.js` is loaded and no console errors

### Colors Not Changing
**Issue:** Some elements don't change color  
**Solution:** Ensure elements use CSS variables instead of hardcoded colors

---

## 📱 Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Opera 74+
- ⚠️ IE11 not supported (CSS variables required)

---

## 🎓 Best Practices

1. **Always use CSS variables** for colors, never hardcode
2. **Load theme.js first** to prevent flash
3. **Test both themes** when adding new features
4. **Maintain contrast ratios** for accessibility
5. **Use semantic color names** (--text-primary, not --gray-1)

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review `theme.js` comments
3. Inspect browser console for errors
4. Check CSS variable usage

---

## 🎉 Features

✨ **What's Included:**
- 🌓 Automatic theme detection
- 💾 Theme persistence across sessions
- 🎨 Complete color system
- ⚡ Smooth transitions
- 🔘 Beautiful toggle button
- ♿ Full accessibility
- 📱 Mobile responsive
- 🚀 No dependencies
- 🎯 Easy to maintain
- 📝 Well documented

---

## 📄 License

Part of the HerHaven project - see main LICENSE file.

---

**Made with 💖 by the HerHaven team**

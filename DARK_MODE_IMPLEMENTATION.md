# Dark Mode Implementation - Colour Cart

## Overview

A complete dark mode implementation has been added to your Next.js project with persistent storage using localStorage. Users can toggle between light and dark modes, and their preference is automatically saved and restored on subsequent visits.

## Features Implemented

### 1. **Theme Context Provider** (`app/context/ThemeContext.jsx`)

- Manages dark mode state globally
- Provides `useTheme` hook for accessing theme data and toggle function
- Automatically loads saved theme from localStorage on mount
- Applies theme by adding/removing the `dark` class to the HTML element

### 2. **Theme Toggle Button** (`app/components/common/ThemeToggle.jsx`)

- Clean, reusable toggle button component
- Shows sun icon in dark mode and moon icon in light mode
- Smooth transitions between modes
- Uses `lucide-react` icons for consistency

### 3. **CSS Variables for Dark Mode**

Updated `app/globals.css` with comprehensive dark mode variables:

```css
:root (Light Mode)
--background: #ffffff
--foreground: #171717
--card-bg: #f9f9f9
--card-border: #e5e5ea
--input-bg: #f5f5fa
--text-secondary: #7e7e8f
--text-muted: #989898
--hover-bg: #f5f5f5
--shadow-color: rgba(0, 0, 0, 0.1)

html.dark (Dark Mode)
--background: #0f0f0f
--foreground: #e8e8e8
--card-bg: #1a1a1a
--card-border: #2d2d2d
--input-bg: #1f1f2e
--text-secondary: #a0a0b0
--text-muted: #888899
--hover-bg: #2a2a2a
--shadow-color: rgba(0, 0, 0, 0.5)
```

### 4. **Updated Components**

#### Navigation Components

- **MainNav.jsx** - Wrapped with ThemeProvider
- **Navbar.jsx** - Added dark mode styling and ThemeToggle button
- **TopNav.jsx** (DashBoard) - Complete dark mode styling with ThemeToggle

#### Dashboard Components

- **SideNav.jsx** - Dark mode styling for all menu items, categories, and borders
- Updated borders, text colors, and hover states

#### Layouts

- **Main Layout** - Integrated theme support
- **DashBoard Layout** - Full dark mode support with background transitions
- **Auth Layout** - Theme support for auth pages

### 5. **Tailwind Configuration**

Updated `postcss.config.mjs` to enable Tailwind's class-based dark mode:

```javascript
darkMode: "class";
```

## How It Works

### 1. **Theme Persistence**

- Theme preference is stored in browser's `localStorage` as `theme` key
- Values: `"light"` or `"dark"`
- Automatically loaded on page refresh/browser restart

### 2. **Theme Application**

- The `dark` class is added to the `<html>` element when dark mode is active
- All dark mode styles use Tailwind's `dark:` prefix
- Smooth CSS transitions between modes

### 3. **Component Usage**

To use the theme hook in any client component:

```jsx
"use client";
import { useTheme } from "@/app/context/ThemeContext";

export default function MyComponent() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
```

## File Structure

```
app/
├── context/
│   └── ThemeContext.jsx          # Theme state and logic
├── components/
│   ├── common/
│   │   ├── ThemeToggle.jsx       # Toggle button component
│   │   └── Navbar/
│   │       ├── MainNav.jsx       # Updated with theme provider
│   │       ├── Navbar.jsx        # Updated with dark mode styling
│   │       └── ...
│   └── DashBoard/
│       └── common/
│           ├── TopNav.jsx        # Updated with theme toggle
│           ├── SideNav.jsx       # Updated with dark mode styling
│           └── ...
├── globals.css                    # Updated with dark mode variables
└── (pages)/
    ├── (main)/layout.js          # Updated
    ├── (DashBoard)/layout.js     # Updated with ThemeProvider
    └── (auth)/layout.js          # Updated with ThemeProvider
```

## Dark Mode Styling Examples

### Using CSS Variables

```jsx
<div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
  Content with dark mode support
</div>
```

### With Transitions

```jsx
<div className="transition-colors duration-300 bg-white dark:bg-slate-900">
  Smooth color transition
</div>
```

## Features

✅ **Light Mode** - Default light theme with original design  
✅ **Dark Mode** - Beautiful dark theme across all pages  
✅ **Persistent Storage** - Theme preference saved to localStorage  
✅ **Smooth Transitions** - CSS transitions between modes  
✅ **Accessible** - Proper contrast and readability in both modes  
✅ **Complete Coverage** - All components styled for both themes  
✅ **Easy Toggle** - Theme toggle button in navbar

## Browser Compatibility

- All modern browsers supporting:
  - CSS custom properties (variables)
  - localStorage API
  - Tailwind CSS v4+

## Testing Dark Mode

1. Click the theme toggle button (sun/moon icon) in the navbar
2. Your preference is automatically saved
3. Refresh the page - your theme choice persists
4. Clear localStorage to reset theme to default (light mode)

## Future Enhancements (Optional)

- Add theme transition animations
- Support for additional color schemes
- User preferences in account settings
- System preference detection (prefers-color-scheme)
- Theme scheduling (automatic switch based on time)

## Notes

- All existing functionality and design has been preserved
- No breaking changes to current code
- Theme support is non-intrusive with clear separation of concerns
- Easy to extend with additional color schemes

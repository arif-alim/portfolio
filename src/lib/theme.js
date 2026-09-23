// Keep this function self-contained: _document runs it before the page paints.
export function initializeTheme() {
  let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  try {
    const saved = window.localStorage.getItem('isDarkMode')
    if (saved === 'true' || saved === 'false') {
      isDark = saved === 'true'
    }
  } catch {
    // Storage may be unavailable; the system preference still works.
  }

  document.documentElement.classList.toggle('dark', isDark)
}

export function saveThemePreference(isDark) {
  try {
    if (isDark === window.matchMedia('(prefers-color-scheme: dark)').matches) {
      window.localStorage.removeItem('isDarkMode')
    } else {
      window.localStorage.setItem('isDarkMode', String(isDark))
    }
  } catch {
    // Toggling the current page must still work when storage is blocked.
  }
}

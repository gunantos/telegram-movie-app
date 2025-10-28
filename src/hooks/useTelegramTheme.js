import { useState, useEffect } from 'react'

// Custom hook for Telegram theme integration
const useTelegramTheme = () => {
  const [theme, setTheme] = useState({
    bgColor: '#1a1a1a',
    textColor: '#ffffff',
    buttonColor: '#6366f1',
    buttonTextColor: '#ffffff',
    hintColor: '#9ca3af',
    linkColor: '#6366f1',
    secondaryBgColor: '#2d3748',
  })

  useEffect(() => {
    // Check if running in Telegram environment
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      
      // Enable theme updates
      tg.ready()
      tg.expand()
      
      // Get theme colors from Telegram
      const themeParams = tg.themeParams || {}
      
      setTheme({
        bgColor: themeParams.bg_color || '#1a1a1a',
        textColor: themeParams.text_color || '#ffffff',
        buttonColor: themeParams.button_color || '#6366f1',
        buttonTextColor: themeParams.button_text_color || '#ffffff',
        hintColor: themeParams.hint_color || '#9ca3af',
        linkColor: themeParams.link_color || '#6366f1',
        secondaryBgColor: themeParams.secondary_bg_color || '#2d3748',
      })

      // Listen for theme changes
      const handleThemeChanged = () => {
        const updatedTheme = tg.themeParams || {}
        setTheme({
          bgColor: updatedTheme.bg_color || '#1a1a1a',
          textColor: updatedTheme.text_color || '#ffffff',
          buttonColor: updatedTheme.button_color || '#6366f1',
          buttonTextColor: updatedTheme.button_text_color || '#ffffff',
          hintColor: updatedTheme.hint_color || '#9ca3af',
          linkColor: updatedTheme.link_color || '#6366f1',
          secondaryBgColor: updatedTheme.secondary_bg_color || '#2d3748',
        })
      }

      tg.onEvent('themeChanged', handleThemeChanged)
      
      return () => {
        tg.offEvent('themeChanged', handleThemeChanged)
      }
    }
  }, [])

  return theme
}

export default useTelegramTheme

import React, { useState, useEffect } from 'react'
import { SDKProvider } from '@telegram-apps/sdk-react'
import Home from './components/pages/Home'
import useTelegramTheme from './hooks/useTelegramTheme'
import './styles/components.css'
import './styles/responsive.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const telegramTheme = useTelegramTheme()

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Movie App...</p>
      </div>
    )
  }

  return (
    <SDKProvider acceptCustomStyles debug={import.meta.env.DEV}>
      <div className="app" style={{
        backgroundColor: telegramTheme.bgColor,
        color: telegramTheme.textColor,
        minHeight: '100vh'
      }}>
        <Home />
      </div>
    </SDKProvider>
  )
}

export default App

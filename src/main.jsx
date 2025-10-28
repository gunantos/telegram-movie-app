import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// Telegram Mini App SDK initialization
import { initMiniApp, mockTelegramEnv, parseInitData } from '@telegram-apps/sdk-react'

const initializeTelegramSDK = async () => {
  try {
    // Attempt to initialize the real Telegram environment
    console.log('Initializing Telegram environment')
    const [miniApp] = initMiniApp()
    await miniApp.ready()
    console.log('Telegram environment initialized successfully')
  } catch (error) {
    // In case of an error, initialize a mock environment for development
    console.error('Error initializing Telegram:', error)
    console.log('Initializing mock Telegram environment for development')
    
    const initDataRaw = new URLSearchParams([
      ['user', JSON.stringify({
        id: 12345678,
        first_name: 'Movie',
        last_name: 'Fan',
        username: 'moviefan',
        language_code: 'id',
        is_premium: false,
        allows_write_to_pm: true,
      })],
      ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
      ['auth_date', Math.floor(Date.now() / 1000).toString()],
      ['start_param', 'movie_app'],
      ['chat_type', 'sender'],
      ['chat_instance', '8428209589180549439'],
    ]).toString()

    mockTelegramEnv({
      themeParams: {
        accentTextColor: '#6366f1',
        bgColor: '#1a1a1a',
        buttonColor: '#6366f1',
        buttonTextColor: '#ffffff',
        destructiveTextColor: '#ef4444',
        headerBgColor: '#1a1a1a',
        hintColor: '#9ca3af',
        linkColor: '#6366f1',
        secondaryBgColor: '#2d3748',
        sectionBgColor: '#1a1a1a',
        sectionHeaderTextColor: '#6366f1',
        subtitleTextColor: '#9ca3af',
        textColor: '#ffffff',
      },
      initData: parseInitData(initDataRaw),
      initDataRaw,
      version: '7.2',
      platform: 'web',
    })
    
    console.log('Mock Telegram environment initialized')
  }
}

// Initialize Telegram SDK
initializeTelegramSDK()

// Render React app
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

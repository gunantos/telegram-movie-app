import React from 'react'
import { MantineProvider } from '@mantine/core'
import { SDKProvider } from '@telegram-apps/sdk-react'
import Home from './components/pages/Home'
import useTelegramTheme from './hooks/useTelegramTheme'
import './styles/globals.css'
import './styles/components.css'
import './styles/responsive.css'

function App() {
  const telegramTheme = useTelegramTheme()

  return (
    <SDKProvider acceptCustomStyles debug={import.meta.env.DEV}>
      <MantineProvider defaultColorScheme="dark" theme={{
        primaryColor: 'indigo',
        colors: {
          dark: [
            '#C1C2C5','#A6A7AB','#909296','#5c5f66','#373A40','#2C2E33','#25262b','#1A1B1E','#141517','#101113'
          ]
        }
      }}>
        <div className="app" style={{
          backgroundColor: telegramTheme.bgColor,
          color: telegramTheme.textColor,
          minHeight: '100vh'
        }}>
          <Home />
        </div>
      </MantineProvider>
    </SDKProvider>
  )
}

export default App

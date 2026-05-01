import { useEffect, useState } from 'react'
import { initData, miniApp, themeParams, viewport, backButton } from '@telegram-apps/sdk'
import './App.css'

function App() {
  const [telegramData, setTelegramData] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      // Initialize the Mini App
      miniApp.mount()
      miniApp.ready()

      // Initialize viewport
      if (viewport.mount.isAvailable()) {
        viewport.mount()
        if (!viewport.isExpanded()) {
          viewport.expand()
          setIsExpanded(true)
        }
      }

      // Initialize theme
      if (themeParams.mount.isAvailable()) {
        themeParams.mount()

        // Apply Telegram theme colors to the app
        const root = document.documentElement
        root.style.setProperty('--tg-theme-bg-color', themeParams.backgroundColor())
        root.style.setProperty('--tg-theme-text-color', themeParams.textColor())
        root.style.setProperty('--tg-theme-hint-color', themeParams.hintColor())
        root.style.setProperty('--tg-theme-link-color', themeParams.linkColor())
        root.style.setProperty('--tg-theme-button-color', themeParams.buttonColor())
        root.style.setProperty('--tg-theme-button-text-color', themeParams.buttonTextColor())
      }

      // Get init data if available
      if (initData.restore()) {
        const data = {
          user: initData.user(),
          startParam: initData.startParam(),
          chatType: initData.chatType(),
          chatInstance: initData.chatInstance(),
        }
        setTelegramData(data)
      }

      // Setup back button
      if (backButton.mount.isAvailable()) {
        backButton.mount()
      }

    } catch (err) {
      console.error('Error initializing Telegram Mini App:', err)
      setError(err.message)
    }

    return () => {
      // Cleanup
      try {
        miniApp.unmount()
        if (viewport.unmount.isAvailable()) {
          viewport.unmount()
        }
        if (themeParams.unmount.isAvailable()) {
          themeParams.unmount()
        }
        if (backButton.unmount.isAvailable()) {
          backButton.unmount()
        }
      } catch (err) {
        console.error('Error during cleanup:', err)
      }
    }
  }, [])

  const handleShowAlert = () => {
    if (miniApp.showAlert.isAvailable()) {
      miniApp.showAlert('Hello from Telegram Mini App! 👋')
    }
  }

  const handleShowConfirm = () => {
    if (miniApp.showConfirm.isAvailable()) {
      miniApp.showConfirm('Do you like this Mini App?').then((confirmed) => {
        const message = confirmed ? 'Great! 🎉' : 'That\'s okay! 👍'
        if (miniApp.showAlert.isAvailable()) {
          miniApp.showAlert(message)
        }
      })
    }
  }

  const handleToggleExpand = () => {
    if (viewport.expand.isAvailable() && viewport.isExpanded()) {
      // Note: There's no collapse method in the SDK, only expand
      setIsExpanded(true)
    } else if (viewport.expand.isAvailable()) {
      viewport.expand()
      setIsExpanded(true)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Telegram Mini App</h1>
        <p className="subtitle">React.js + GitHub Pages Proof of Concept</p>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-box">
            <h3>⚠️ Error</h3>
            <p>{error}</p>
            <p className="hint">This app is designed to run inside Telegram. Try opening it in the Telegram app.</p>
          </div>
        )}

        <section className="info-section">
          <h2>📱 App Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>Platform:</strong>
              <span>{miniApp.platform() || 'Unknown'}</span>
            </div>
            <div className="info-item">
              <strong>Version:</strong>
              <span>{miniApp.version() || 'N/A'}</span>
            </div>
            <div className="info-item">
              <strong>Viewport Expanded:</strong>
              <span>{isExpanded ? 'Yes ✅' : 'No ❌'}</span>
            </div>
          </div>
        </section>

        {telegramData && (
          <section className="info-section">
            <h2>👤 User Information</h2>
            <div className="info-grid">
              {telegramData.user && (
                <>
                  <div className="info-item">
                    <strong>First Name:</strong>
                    <span>{telegramData.user.firstName || 'N/A'}</span>
                  </div>
                  <div className="info-item">
                    <strong>Last Name:</strong>
                    <span>{telegramData.user.lastName || 'N/A'}</span>
                  </div>
                  <div className="info-item">
                    <strong>Username:</strong>
                    <span>{telegramData.user.username || 'N/A'}</span>
                  </div>
                  <div className="info-item">
                    <strong>Language:</strong>
                    <span>{telegramData.user.languageCode || 'N/A'}</span>
                  </div>
                </>
              )}
              {telegramData.startParam && (
                <div className="info-item">
                  <strong>Start Param:</strong>
                  <span>{telegramData.startParam}</span>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="actions-section">
          <h2>🎮 Interactive Actions</h2>
          <div className="button-grid">
            <button className="action-button" onClick={handleShowAlert}>
              Show Alert
            </button>
            <button className="action-button" onClick={handleShowConfirm}>
              Show Confirm
            </button>
            <button className="action-button" onClick={handleToggleExpand}>
              Expand Viewport
            </button>
          </div>
        </section>

        <section className="info-section">
          <h2>✨ Features Demonstrated</h2>
          <ul className="features-list">
            <li>✅ React.js integration with Vite</li>
            <li>✅ Telegram Mini App SDK (@telegram-apps/sdk)</li>
            <li>✅ Theme integration (using Telegram colors)</li>
            <li>✅ User data retrieval</li>
            <li>✅ Viewport management</li>
            <li>✅ Interactive dialogs (alerts, confirms)</li>
            <li>✅ GitHub Pages deployment ready</li>
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite | Hosted on GitHub Pages</p>
        <p className="repo-link">
          <a href="https://github.com/konard/github-pages-telegram-mini-app" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

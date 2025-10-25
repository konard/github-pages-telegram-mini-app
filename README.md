# Telegram Mini App with React.js and GitHub Pages

A proof of concept demonstrating that it is possible to create a Telegram Mini App with React.js frontend hosted on GitHub Pages.

## Features

- ✅ React.js with Vite for fast development
- ✅ Telegram Mini App SDK integration (@telegram-apps/sdk)
- ✅ Automatic theme integration (uses Telegram's color scheme)
- ✅ User data retrieval from Telegram
- ✅ Viewport management (expand/collapse)
- ✅ Interactive dialogs (alerts, confirms)
- ✅ GitHub Pages deployment with GitHub Actions
- ✅ Responsive design for mobile devices

## Live Demo

Once deployed, the app will be available at: https://konard.github.io/github-pages-telegram-mini-app/

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- A Telegram account
- A GitHub account

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/konard/github-pages-telegram-mini-app.git
   cd github-pages-telegram-mini-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Setting Up Your Telegram Mini App

### Step 1: Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Start a chat and send the `/newbot` command
3. Follow the prompts to:
   - Choose a name for your bot (e.g., "My Mini App Bot")
   - Choose a username for your bot (must end in 'bot', e.g., "my_mini_app_bot")
4. Save the bot token provided by BotFather (you'll need it later)

### Step 2: Create the Mini App

1. In the same chat with BotFather, send the `/newapp` command
2. Select the bot you just created
3. Provide the required information:
   - **Title**: Your Mini App title (e.g., "My Mini App")
   - **Description**: A short description of your app
   - **Photo**: Upload a 640x360 PNG image for your app (you can use a placeholder)
   - **Demo GIF/Video**: Optional - you can skip this
   - **Web App URL**: Enter your GitHub Pages URL:
     ```
     https://konard.github.io/github-pages-telegram-mini-app/
     ```

### Step 3: Configure Bot Menu Button (Optional)

To make your Mini App accessible from the bot's menu button:

1. Send `/setmenubutton` to BotFather
2. Select your bot
3. Choose "Edit menu button"
4. Enter the button text (e.g., "Open App")
5. Enter the Web App URL:
   ```
   https://konard.github.io/github-pages-telegram-mini-app/
   ```

### Step 4: Test Your Mini App

1. Open your bot in Telegram
2. If you set up the menu button, you'll see a button at the bottom of the chat
3. Click it to open your Mini App
4. Alternatively, you can access it via:
   ```
   https://t.me/YOUR_BOT_USERNAME/YOUR_APP_SHORT_NAME
   ```

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured for automatic deployment via GitHub Actions.

1. **Enable GitHub Pages in repository settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under "Build and deployment", select **Source: GitHub Actions**

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - You should see a workflow running
   - Once complete, your app will be live at `https://[username].github.io/[repo-name]/`

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make it available on GitHub Pages

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for deployment
├── public/
│   └── .nojekyll             # Prevents Jekyll processing on GitHub Pages
├── src/
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## Key Technologies

- **React 19.x**: Modern React with latest features
- **Vite 7.x**: Next-generation frontend tooling
- **@telegram-apps/sdk**: Official Telegram Mini Apps SDK
- **gh-pages**: Simple GitHub Pages deployment

## Telegram Mini App SDK Features Used

This proof of concept demonstrates the following Telegram SDK features:

- `miniApp`: Core Mini App functionality
  - Platform detection
  - Version information
  - Ready state management
  - Alert dialogs
  - Confirmation dialogs

- `themeParams`: Access to Telegram's theme colors
  - Background color
  - Text color
  - Hint color
  - Link color
  - Button color
  - Button text color

- `initData`: User and chat information
  - User details (name, username, language)
  - Start parameters
  - Chat type and instance

- `viewport`: Viewport management
  - Expand functionality
  - Viewport state tracking

- `backButton`: Navigation control
  - Back button mounting and management

## Troubleshooting

### App doesn't load in Telegram

1. Make sure your GitHub Pages deployment is successful
2. Check that the URL in BotFather matches your GitHub Pages URL exactly
3. Try clearing Telegram's cache (Settings → Data and Storage → Storage Usage → Clear Cache)
4. Make sure the URL uses HTTPS (GitHub Pages provides this automatically)

### Theme colors not working

The app falls back to default colors if Telegram theme parameters are not available. This is normal when testing outside of Telegram.

### Development server shows errors

Make sure you have the correct Node.js version (20.x or higher) and all dependencies are installed:
```bash
node --version
npm install
```

## Testing Outside Telegram

The app includes error handling for when it's loaded outside of Telegram. You'll see a warning message, but the basic layout will still be visible. For full functionality, the app must be opened within Telegram.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License - see LICENSE file for details

## Resources

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [Telegram Apps SDK Documentation](https://docs.telegram-mini-apps.com/)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/pages)

## Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#troubleshooting) section above
2. Review the [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
3. Open an issue in this repository

## Acknowledgments

This project demonstrates the integration of modern web technologies with Telegram's Mini Apps platform, proving that GitHub Pages can successfully host React-based Telegram Mini Apps.

# Context7 Setup Guide

Context7 is an Upstash service that provides up-to-date documentation and code snippets to LLMs, ensuring that AI assistants have access to the latest versions from GitHub.

## What is Context7?

Context7 ensures that:
- Documentation provided to LLMs is the latest version from GitHub
- Code snippets are current and accurate
- Best practices are followed based on the latest standards
- Your codebase stays aligned with the latest React, Vite, and other library versions

## Setting Up Context7 in Cursor

Context7 is configured at the IDE level (Cursor), not in your codebase. Here's how to set it up:

### Step 1: Create a Context7 Account

1. Visit [https://context7.com/](https://context7.com/)
2. Sign up for an account (it's an Upstash project)
3. Create an API key from the dashboard

### Step 2: Add Your GitHub Repository

1. In the Context7 dashboard, click "Add Docs"
2. Connect your GitHub repository: `NeriaChurch`
3. Select which branches to sync (typically `main` or `master`)
4. Choose which directories/files to include:
   - `src/` - All source code
   - `package.json` - Dependencies
   - `README.md` - Documentation
   - Configuration files (`vite.config.js`, `tailwind.config.js`)

### Step 3: How Context7 Works with Cursor

**Important Note:** Context7 integration with Cursor may work in different ways depending on your Cursor version and setup. Here are the possible approaches:

#### Option A: Automatic Integration (Most Common)
Once you've added your repository to Context7:
- Context7 automatically syncs your GitHub repository
- Cursor's AI assistant may automatically access Context7 documentation if it's configured at the system level
- No manual configuration needed in Cursor settings

#### Option B: Manual Configuration (If Available)
If your Cursor version supports direct Context7 integration:

1. **Check Cursor Settings:**
   - Open Cursor Settings (Ctrl+, or Cmd+,)
   - Look for "AI" or "LLM" or "Extensions" section
   - Search for "Context7" or "Documentation" settings

2. **Alternative: Environment Variables:**
   - Context7 might use environment variables
   - Check if there's a `.cursor` folder or configuration file
   - Look for API key configuration options

3. **Check Context7 Dashboard:**
   - In your Context7 dashboard, look for "Integration" or "API" section
   - There may be instructions for IDE integration
   - Copy any API keys or configuration needed

#### Option C: Using Context7 API Directly
If direct Cursor integration isn't available:
- Context7 provides an API that can be accessed programmatically
- The service works by indexing your GitHub repository
- AI assistants can query Context7's API to get up-to-date documentation

### Step 4: Verify Setup

To verify Context7 is working:

1. **Check Context7 Dashboard:**
   - Ensure your repository shows as "Synced" or "Active"
   - Verify the last sync timestamp is recent
   - Check that your selected files/directories are indexed

2. **Test in Cursor:**
   - Ask Cursor's AI about your codebase
   - The AI should reference your actual code structure
   - Responses should reflect your current React/Vite setup

3. **Monitor Sync Status:**
   - Context7 syncs automatically when you push to GitHub
   - Check the dashboard for sync status
   - Ensure your GitHub repository is accessible to Context7

## Current Project Status

### ✅ Code Quality Checklist

- [x] **React 18.2.0** - Latest stable version
- [x] **Vite 5.0.8** - Latest build tool
- [x] **React Router v6** - Latest routing solution
- [x] **Modern Hooks** - Using `useState`, `useEffect`, `useTranslation`
- [x] **Functional Components** - All components are functional (no class components)
- [x] **React StrictMode** - Enabled in `main.jsx`
- [x] **ES6+ Syntax** - Modern JavaScript features
- [x] **Proper Imports** - Using ES6 import/export
- [x] **Type Safety** - TypeScript types available (dev dependency)

### 📦 Dependencies Status

All dependencies are using recent versions:
- `react`: ^18.2.0 ✅
- `react-dom`: ^18.2.0 ✅
- `react-router-dom`: ^6.20.0 ✅
- `vite`: ^5.0.8 ✅
- `@vitejs/plugin-react`: ^4.2.1 ✅
- `tailwindcss`: ^3.3.6 ✅

### 🎯 Best Practices Followed

1. **Component Structure**: All components are properly structured with clear separation of concerns
2. **Internationalization**: Using `react-i18next` for multi-language support
3. **Routing**: Proper React Router v6 implementation
4. **Styling**: Tailwind CSS with custom configuration
5. **Code Organization**: Clear folder structure (`components/`, `pages/`, `utils/`, `services/`)
6. **Error Handling**: Proper error boundaries and fallbacks
7. **Accessibility**: Semantic HTML and ARIA attributes where needed
8. **Performance**: Code splitting, lazy loading where applicable

## Recommended Next Steps

1. **Set up Context7** in Cursor to ensure AI assistance uses latest patterns
2. **Regular Updates**: Run `npm outdated` periodically to check for updates
3. **Code Reviews**: Use Context7 to ensure new code follows latest best practices
4. **Documentation**: Keep README and code comments up-to-date

## Resources

- [Context7 Website](https://context7.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

## Troubleshooting

### If you can't find Context7 settings in Cursor:

1. **Context7 may work automatically** - Once you add your repo to Context7, it may work without Cursor-specific settings
2. **Check Context7 Dashboard** - The main configuration happens on context7.com, not in Cursor
3. **Contact Support** - Visit context7.com and check their documentation or support for Cursor-specific integration steps
4. **Alternative Approach** - Context7 primarily works by indexing your GitHub repo, which then provides documentation to any LLM that queries it

### Common Issues:

- **Repository not syncing**: Ensure GitHub access is granted in Context7 dashboard
- **Outdated documentation**: Check sync status in Context7 dashboard
- **API key issues**: Verify your API key is active in Context7 dashboard

## Notes

- Context7 syncs with your GitHub repository, so ensure your code is pushed to GitHub
- The service works best when your repository is public or you've granted Context7 access
- Updates from GitHub are synced automatically to keep documentation current
- **Most configuration happens on context7.com**, not in Cursor settings
- Cursor may access Context7 automatically if it's configured to use external documentation services

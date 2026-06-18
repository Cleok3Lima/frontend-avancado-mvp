import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Context modules intentionally co-export a Provider component and its
      // consumer hook (the standard React Context pattern) — Fast Refresh
      // falls back to a full reload for these files, which is an acceptable
      // trade-off for this small app.
      'react-refresh/only-export-components': 'off',
      // Flags the standard "fetch on mount" idiom (toggle isLoading, then
      // fetch) used by useFlashcardsData — not an actual cascading-render bug.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
])

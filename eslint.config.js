import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Warn (not error) on explicit `any` — keeps DX smooth but flags unsafe code.
      '@typescript-eslint/no-explicit-any': 'warn',

      // Enforce type-only imports for interfaces/types.
      // Reduces bundle risk from accidentally importing runtime values.
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

      // Prevent unused variables from silently accumulating.
      // (TypeScript also catches these, but ESLint reports them faster in the editor.)
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // React-specific: keys in lists must be stable, non-index where possible.
      // (Framer Motion's AnimatePresence relies on this.)
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])

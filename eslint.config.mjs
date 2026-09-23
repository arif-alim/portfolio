import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', '.vercel/**', '.claude/**']),
  {
    files: ['src/**/*.{js,jsx}'],
    rules: {
      'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    },
  },
])

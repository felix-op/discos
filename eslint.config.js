import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import tseslint from 'typescript-eslint';

export default defineConfig([
  // 1. Ignorar carpetas comunes
  globalIgnores(['dist', 'node_modules', 'build', '.vite-cache']),

  // 2. Aplicar las reglas recomendadas de ESLint
  js.configs.recommended,

  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: { version: 'detect' },
    },
  },

  {
    ...reactPlugin.configs.flat['jsx-runtime'],
  },

  // 3. Configuración para tus archivos de código fuente
  {
    files: ['src/**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },

      globals: {
        ...globals.browser,
        ...globals.esNext,
      },
    },
    
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn'
      // Ejemplo: 'no-unused-vars': 'warn'
    },
  },
]);
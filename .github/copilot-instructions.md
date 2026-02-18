# Calonmantu AI Coding Instructions

## Project Overview

**Calonmantu** is a minimal React 19 + Vite boilerplate project with React Compiler optimization enabled. This is an early-stage project (v0.0.0) with a foundational component structure.

## Architecture & Key Technologies

### Tech Stack
- **Framework**: React 19 (functional components with hooks)
- **Bundler**: Vite 8.0 (beta) - provides fast HMR and dev experience
- **Compilation**: React Compiler enabled via Babel plugin for automatic memoization optimization
- **Tooling**: ESLint with React-specific rules
- **Rendering**: React 18+ createRoot API with StrictMode

### Key Files
- `src/main.jsx` - App entry point using React 18+ createRoot
- `src/App.jsx` - Primary component (currently a starter counter example)
- `vite.config.js` - Vite configuration with React plugin + Babel React Compiler
- `eslint.config.js` - Flat ESLint config with React hooks and refresh rules

## Essential Development Workflows

### Commands
```bash
npm run dev      # Start Vite dev server (port 5173 by default)
npm run build    # Production build to dist/
npm run lint     # Run ESLint on all .js/.jsx files
npm run preview  # Preview production build locally
```

### Development Experience
- **Hot Module Replacement (HMR)**: Edit `src/App.jsx` and save to see changes instantly
- **Strict Mode**: Enabled in development (src/main.jsx) - watch console for double-invocation warnings used to detect side effects
- **React Compiler**: Automatically memoizes components and deps - write code naturally, no manual useMemo/useCallback needed

## Code Patterns & Conventions

### React Component Structure
All components are **functional components with hooks**. Example from App.jsx:
```jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default App
```

### ESLint Rules
- **React Hooks**: Enforced via `eslint-plugin-react-hooks` (rules of hooks)
- **React Refresh**: Enforced via `eslint-plugin-react-refresh` (Vite HMR compatibility)
- **Unused Variables**: Custom rule allows `[A-Z_]*` patterns (for constants, Component names)
- **Target**: ES2020 with browser globals

### Styling
- Component-scoped CSS files (e.g., `App.css` for App.jsx)
- Global styles in `src/index.css`
- CSS is imported directly in JSX files

## Critical Development Notes

### React Compiler Implications
- Components automatically memoized by compiler - don't add manual `useMemo`/`useCallback` unless necessary
- Write code following React patterns; compiler optimizes automatically
- Reference: https://react.dev/learn/react-compiler

### Build Artifacts
- Production output: `dist/` (ignored in ESLint)
- Always run `npm run build` before deployment
- Use `npm run preview` to test production build locally

### File Naming
- Components: PascalCase (e.g., `App.jsx`)
- Utilities/helpers: camelCase
- Assets in `src/assets/`

## When Adding Features
1. Create functional components using hooks
2. Keep components simple and focused (Compiler works best with predictable React patterns)
3. Run `npm run lint` before committing
4. Test HMR by editing and saving - changes should reflect instantly
5. For new collections of functionality, consider component subdirectories

## Integration Points
- **React 19**: Latest hooks and features available
- **Babel React Compiler**: Plugin is active - no configuration needed
- **Vite Plugins**: Only `@vitejs/plugin-react` with Compiler enabled

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("[v0] Main entry point loading");

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log("[v0] Root element found, rendering app");
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("[v0] Root element not found!");
}

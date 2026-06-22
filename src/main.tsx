import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for third-party scripts (like vturb) that try to overwrite window.fetch
// In some strict environments, window.fetch is a getter-only property.
try {
  if (typeof window !== 'undefined') {
    const _fetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get() { return _fetch; },
      set(newFetch) {
        Object.defineProperty(window, 'fetch', {
          value: newFetch,
          writable: true,
          configurable: true,
          enumerable: true
        });
      }
    });
  }
} catch (e) {
  console.warn('Could not make window.fetch writable', e);
}

// Fix for third-party scripts that attempt to JSON.stringify DOM nodes or React Events,
// which causes "Converting circular structure to JSON" due to React Fiber properties.
const originalStringify = JSON.stringify;
JSON.stringify = function (value, replacer, space) {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: string, val: any) => {
      if (typeof val === 'object' && val !== null) {
        if (val instanceof Node) {
          return `[Node ${val.nodeName}]`;
        }
        if (seen.has(val)) {
          return '[Circular]';
        }
        seen.add(val);
      }
      return val;
    };
  };

  try {
    return originalStringify(value, replacer, space);
  } catch (e: any) {
    if (e.message && e.message.includes('circular')) {
      return originalStringify(value, getCircularReplacer(), space);
    }
    throw e;
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

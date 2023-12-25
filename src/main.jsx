import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ThemeContextProvider from './context/ThemeContext.jsx';

import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

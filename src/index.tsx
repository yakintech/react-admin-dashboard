import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/query/queryClient';
import { StrictMode } from 'react';
import { CartProvider } from './context/CartContext';
import "./utils/i18/i18n";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </CartProvider>

);


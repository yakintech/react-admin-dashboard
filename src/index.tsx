import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/query/queryClient';
import { StrictMode } from 'react';
import { CartProvider } from './context/CartContext';
import "./utils/i18/i18n";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './store/AuthSlice'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: {
    auth: AuthReducer
  }
})
root.render(
  <Provider store={store}>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </CartProvider>
  </Provider>


);


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App.jsx';
import './css/tailwind.css';
import { GlobalProductsProvider } from './global/products/GlobalProducts.jsx';

const client = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <GlobalProductsProvider>
        <App />
      </GlobalProductsProvider>
    </QueryClientProvider>
  </StrictMode>,
)
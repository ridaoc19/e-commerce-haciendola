import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StoreContext } from './hooks/useContext';
import './styles/index/index.scss';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StoreContext>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </StoreContext>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

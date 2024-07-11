import React from 'react';
import ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import App from './App.tsx';
import './index.css';

import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { ProductDetails } from './pages/ProductDetails/ProductDetails.tsx';
import { Main } from './pages/Main/Main.tsx';
import { Cart } from './pages/Cart/Cart.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
  {
    path: '*',
    element: <Main />,
  },
  {
    path: 'product/:id',
    element: <ProductDetails />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
]);

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot>
      <RouterProvider router={router} />
    </AppRoot>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import './index.css';
import CartPage from './pages/cart_page';
import NewProduct from './pages/new_product';
import Products from './pages/products';
import ProductDetail from './pages/product_detail';
import ProtectedRoute from './pages/protected_route';


import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Products />,
      },
      {
        path: '/products',
        element: <Products />,

      },
      {
        path: '/productDetail',
        element: <ProductDetail />,
      },
      {
        path: '/new',
        element: (
          <ProtectedRoute hasAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <CartPage />
        ),
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

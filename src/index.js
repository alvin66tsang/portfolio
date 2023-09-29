import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Alvin Tsang Portfolio</title>
      <link rel="canonical" href="https://alvin66tsang.github.io/portfolio/" />
    </Helmet>
    <App />
  </HelmetProvider>
);

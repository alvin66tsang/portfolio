import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alvin Tsang Portfolio</title>
        <link rel="canonical" href="https://alvin66tsang.github.io/portfolio/" />
    </Helmet>
    <App />
  </React.StrictMode>
);

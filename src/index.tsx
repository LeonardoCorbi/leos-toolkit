import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MenuProvider } from './context/MenuContext';
import { GlobalStyles } from './Styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <App />
      </MenuProvider>
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
);

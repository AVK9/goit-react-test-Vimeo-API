import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, theme } from 'styles';

import { App } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/goit-react-test-Vimeo-API">
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
      </ThemeProvider>
      </BrowserRouter>
  //  </React.StrictMode>
);

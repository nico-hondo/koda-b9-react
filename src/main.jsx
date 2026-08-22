import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeProvider from "./components/ThemeProvider.jsx";
import UserProvider from './context/user/UserProvider.jsx';
import reduxStore, {persistor} from './redux/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <UserProvider>
            <BrowserRouter>
              <Header/>
              <Router/>
              <Footer/>
            </BrowserRouter>
          </UserProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)

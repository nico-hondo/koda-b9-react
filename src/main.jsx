import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import './index.css'
import { Provider } from 'react-redux';

import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeProvider from "./components/ThemeProvider.jsx";
import UserProvider from './context/user/UserProvider.jsx';
import reduxStore from './redux/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Header/>
            <Router/>
            <Footer/>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from './components/context/DataContext.jsx';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <DataProvider>
    <App />
    <ToastContainer position="top-right" autoClose={5000} />
    </DataProvider>
  </React.StrictMode>
  </BrowserRouter>
)

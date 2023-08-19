import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDom.createRoot(document.getElementById('root'))
root.render(

    <div>
    
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
    
    </div>)
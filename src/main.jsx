import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App'
import '../src/assets/css/main.css';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios' 


axios.defaults.baseURL = 'http://localhost:3000';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
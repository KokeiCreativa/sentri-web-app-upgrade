import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './style.css' // ✅ JANGAN LUPA!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sentri-web-app-upgrade">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

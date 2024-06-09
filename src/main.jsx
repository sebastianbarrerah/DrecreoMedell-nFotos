import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/reset.css'
import Router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

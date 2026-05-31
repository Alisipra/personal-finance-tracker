import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ModalContext from './context/ModalContext.jsx'
import ModalProvider from './context/ModalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <App />
  </ModalProvider>
)

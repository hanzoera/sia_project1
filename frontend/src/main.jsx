import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/bootstrap-5.3.7-dist/css/bootstrap.css'
// import './styles/react.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>
)

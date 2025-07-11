import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import ThemeProvider from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>,
)

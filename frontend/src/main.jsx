import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
}
  from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />}></Route>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

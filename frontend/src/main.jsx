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
import SameBrainPage from './pages/SameBrainPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />}></Route>
      <Route path='sameBrain' element={<SameBrainPage />}></Route>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

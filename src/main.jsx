import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import { CenarioProvider } from './contexts/CenarioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CenarioProvider>
        <RouterProvider router={router}> </RouterProvider>
    </CenarioProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Admission_Context from './Context/Admission_Context.jsx'
import Notice_Context from './Context/Notice_Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Admission_Context>
        <Notice_Context>
          <App />
        </Notice_Context>
      </Admission_Context>
    </BrowserRouter>
  </StrictMode>,
)

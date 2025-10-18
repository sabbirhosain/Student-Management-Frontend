import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Admission_Context from './Context/Admission_Context.jsx'
import Notice_Context from './Context/Notice_Context.jsx'
import Academy_Info_Context from './Context/Academy_Info_Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Academy_Info_Context>
        <Admission_Context>
          <Notice_Context>
            <App />
          </Notice_Context>
        </Admission_Context>
      </Academy_Info_Context>
    </BrowserRouter>
  </StrictMode>,
)

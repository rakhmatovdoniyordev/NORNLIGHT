import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './context'
import { reducer, initialState } from './context/reducer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </StrictMode>,
)

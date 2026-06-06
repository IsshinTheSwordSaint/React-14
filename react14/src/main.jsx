import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './components/Form.jsx'
import Form2 from './components/Form2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <Form2 />
  </StrictMode>,
)

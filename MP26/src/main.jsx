import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import Menu from "./components/paginas/Menu"
import Layout from "./components/paginas/Layout"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Client from './pages/Client'
import About from './pages/About'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

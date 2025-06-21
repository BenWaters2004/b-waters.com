import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NoPage from './pages/NoPage'
import Privacy from './pages/Privacy'
import BITSecurity from "./pages/CaseStudies/BITSecurity";
import BITTraining from "./pages/CaseStudies/BITTraining";
import Classified from "./pages/CaseStudies/Classified";
import LSS from "./pages/CaseStudies/LSS";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />

          <Route path="/BIT Security" element={<BITSecurity />} />
          <Route path="/BIT Training" element={<BITTraining />} />
          <Route path="/Get Classified" element={<Classified />} />
          <Route path="/LSS - Lewis Scaffold Solutions" element={<LSS />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

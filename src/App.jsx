import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import INTRO from  './pages/intro'
import LOGIN from './pages/login'
import SIGNUP from './pages/signup'
import LANDING from './pages/landingPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<INTRO />} />,
      <Route path="/login" element={<LOGIN />} />,
      <Route path="/signup" element={<SIGNUP />} />,
      <Route path="/landing" element={<LANDING />} />,
    </Routes>
    </BrowserRouter>

  )
    }
     

export default App;
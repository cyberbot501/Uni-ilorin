import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import INTRO from  './pages/intro'
import LOGIN from './pages/login'
import SIGNUP from './pages/signup'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<INTRO />} />,
      <Route path="/login" element={<LOGIN />} />,
      <Route path="/signup" element={<SIGNUP />} />,
    </Routes>
    </BrowserRouter>

  )
    }
     

export default App;
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import INTRO from  './pages/intro'
import LOGIN from './pages/login'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<INTRO />} />,
      <Route path="/login" element={<LOGIN />} />,
    </Routes>
    </BrowserRouter>

  )
    }
     

export default App;
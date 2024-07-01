import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import INTRO from  './pages/intro'
import LOGIN from './pages/login'
import SIGNUP from './pages/signup'
import LANDING from './pages/landingPage'
import DASHBOARD from './pages/dashboard'
import RegisterPage from "./pages/appointment";
import APPOINTMENT from './pages/appointment'
import USER from './pages/user'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<INTRO />} />,
      <Route path="/login" element={<LOGIN />} />,
      <Route path="/signup" element={<SIGNUP />} />,
      <Route path="/landing" element={<LANDING />} />
      <Route path="/dashboard" element={<DASHBOARD />} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/appointment" element={<APPOINTMENT/>}/>
      <Route path="/user" element={<USER />}/>
    </Routes>
    </BrowserRouter>

  )
    }
     

export default App;
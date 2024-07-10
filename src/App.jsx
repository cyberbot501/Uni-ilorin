import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import INTRO from './pages/intro';
import LOGIN from './pages/login';
import SIGNUP from './pages/signup';
import LANDING from './pages/landingPage';
import DASHBOARD from './pages/dashboard';
import RegisterPage from "./pages/appointment";
import APPOINTMENTS from './pages/appointments';
import USER from './pages/user';
import StepOne from "./pages/appointment/steps/step-one";
import StepTwo from "./pages/appointment/steps/step-two";
import { UserProvider } from './contexts/UserContext';
import DLOGIN from './pages/dlogin';
import DSIGNUP from './pages/dsignup';
import DOCTORS from './pages/doctors';
import PICK from './pages/pick';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<INTRO />} />,
        <Route path="/login" element={<LOGIN />} />,
        <Route path="/signup" element={<SIGNUP />} />,
        <Route path="/landing" element={<LANDING />} />
        <Route path="/dashboard" element={<DASHBOARD />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/appointments" element={<APPOINTMENTS />} />
        <Route path="/user" element={<USER />} />
        <Route path="/stepone" element={<StepOne />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/dlogin" element={<DLOGIN />} />
        <Route path="/dsignup" element={<DSIGNUP />} />
        <Route path="/doctors" element={<DOCTORS />} />
        <Route path="/pick" element={<PICK />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>

  )
}


export default App;
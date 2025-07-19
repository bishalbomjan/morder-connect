import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-appointment" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;

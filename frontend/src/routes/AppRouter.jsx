import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Elderly from "../pages/ElderlySupport/Elderly";
import PrePreg from "../pages/PrePreg/Pre";
import Preg from "../pages/Preg/Preg";
import PostPreg from "../pages/PostPreg/Post";
import Community from "../components/PostPreg/Community";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/elderly-support" element={<Elderly />} />
      <Route path="/prepregnancy-support" element={<PrePreg />} />
      <Route path="/pregnancy-support" element={<Preg />} />
      <Route path="/postpregnancy-support" element={<PostPreg />} />
      <Route path="/community" element={<Community/>} />
    </Routes>
  );
}

export default AppRouter;

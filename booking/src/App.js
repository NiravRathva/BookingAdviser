import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from "./Pages/Home/Home"
import HotelsList from "./Pages/Hotels/HotelsList"
import Hotel from "./Pages/Hotel/Hotel"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/Signup/SignUp";
function App() {
  return (
    <>
    <Router>
    
      <Routes>
      <Route path="/" element={<Home/>} />      
      </Routes>
      <Routes>
      <Route path="/hotels" element={<HotelsList/>} />      
      </Routes>
      <Routes>
      <Route path="/hotels/:id" element={<Hotel/>} />     
      <Route path="/login" element={<Login/>}/> 
      <Route path="/register" element={<SignUp/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;

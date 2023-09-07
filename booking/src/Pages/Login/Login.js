import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { AuthContextProvider } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  // const {login,error,loading}=AuthContextProvider
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", credentials);
      console.log(res.data.details)
      const loggedInUser = res.data.details
      authContext.login(loggedInUser)
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={authContext.loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {authContext.error && <span>{authContext.error.message}</span>}
      </div>
    </div>
  );
};

export default Login;

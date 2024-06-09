import "./Login.scss";
import login from "../../assets/login.png";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Login = () => { 
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("token", "eaxdakedakdakda");
    navigate("/admin")
  };

  return (
    <>
      <div className="login">
        <div className="login_img">
          <img src={login} alt="" />
        </div>
        <div className="login_txt">
          <div className="login_text">
            <h3>Hello, <span> Guyss!</span></h3>
          </div>
          <div className="login_input">
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

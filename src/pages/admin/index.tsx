import Sidebar from "./sidebar/Sidebar";
import './Admin.scss'
import { useLocation } from "react-router-dom";

const Admin = () => {
  const { pathname } = useLocation();
  const username = localStorage.getItem("username"); 
  const password = localStorage.getItem("password");
  const token = localStorage.getItem("token"); 
  if (username !== "john32" && password !== "87654321" && token !== "eaxdakedakdakda") { 
    
    window.location.href = "/login";
    return null; 
  }
  const handleLogin = (username, password) => {
    if (username === username && password === password) {
      return true;  
    }
    return false; 
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="admin__content">
        {pathname.includes("manage-products") && handleLogin(username,password) && (

          <p>Manage Products sahifasi</p>
        )}
      </div>
    </div>
  );
};

export default Admin;

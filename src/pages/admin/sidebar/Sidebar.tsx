import './Sidebar.scss'
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { IoMdCreate } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom'; // useHistory ni import qilish
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <Link to={"/"}><strong><FaArrowLeft />
      Admin Dashboard</strong></Link>
      <br />
      <br />
      <ul className='ul'>
      <NavLink to="/admin/create_product"><li><VscGitPullRequestCreate />
        Create product</li></NavLink>
        <NavLink to="/admin/manage_product"><li><IoMdCreate />
        Manage product</li></NavLink>
        <NavLink to="/admin/create_category"><li><VscGitPullRequestCreate />Create category</li></NavLink>
        <NavLink to="/admin/manage_category"><li><IoMdCreate />Manage category</li></NavLink>
        <div className='log_out'>
          <li onClick={handleLogout}><IoIosLogOut />Log out</li> {/* handleLogout funksiyasini chaqirish */}
        </div>
      </ul>
    </div>
  )
}

export default Sidebar;

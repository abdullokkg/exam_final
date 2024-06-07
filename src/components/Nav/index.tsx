import "./Nav.scss"
import Vector from "../../assets/Vector.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";
import { BsCart } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="nav_hero">
        <ul className="nav_hero_ul">
          <li>О компании</li>
          <li>Доставка и оплата</li>
          <li>Возврат</li>
          <li>Гарантии</li>
          <li>Контакты</li>
          <li>Блог</li>
        </ul>
        <ul className="nav_hero_ul">
          <strong>8 (800) 890-46-56</strong>
          <li>Заказать звонок</li>
        </ul>
      </div>
      <nav className="nav">
        <div className="nav_logo">
          <h1><img src={Vector} alt="" /> NORNLIGHT</h1>
        </div>
        <div className="nav_search">
          <button className="btn1"><FaBarsStaggered className="icon"/> Каталог</button>
          <div className="search">
            <input type="text" placeholder="Поиск по товарам" />
            <button><IoIosSearch /></button>
            <div>
              {
                
              }
            </div>
          </div>
        </div>
        <div className="nav_btn">
          <button><CiHeart  className="icon"/>Избранное</button>
          <button><FiBarChart  className="icon"/>Сравнение</button>
          <button><BsCart  className="icon"/>Корзина</button>
        </div>
      </nav>
    </>
  )
}

export default Nav

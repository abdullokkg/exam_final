import "./Nav.scss"
import Vector from "../../assets/Vector.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { ID } from "../../redux/slice3/ids";

const Nav = () => {
  const [data, setData] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    axios.get("https://66607cbf5425580055b42150.mockapi.io/Lamps")
      .then((response) => {
        setData(response.data)
      })
  })
  let handleSearch = (data) => {
    return data?.filter(user => user.title.toLowerCase().includes(searchValue.toLocaleLowerCase().trim()))
  }
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const handleup3 = (phone2) => {
    dispatch(ID(phone2))
    console.log(phone2);
    navigate("/id")
  }
  return (
    <>
      <div className="nav_hero">
        <ul className="nav_hero_ul">
          <Link to={"/about_us"}><li>О компании</li></Link>
          <Link to={"/shipping_payment"}><li>Доставка и оплата</li></Link>
          <Link to={"/return"}><li>Возврат</li></Link>
          <Link to={"/garant"}><li>Гарантии</li></Link>
          <Link to={"/contact"}><li>Контакты</li></Link>
          <Link to={"/blog"}><li>Блог</li></Link>
        </ul>
        <ul className="nav_hero_ul">
          <strong>8 (800) 890-46-56</strong>
          <li>Заказать звонок</li>
        </ul>
      </div>
      <nav className="nav">
        <div className="nav_logo">
          <Link to={"/"}><h1><img src={Vector} alt="" /> NORNLIGHT</h1></Link>
        </div>
        <div className="nav_search">
          <Link to={"/catalog"}><button className="btn1"><FaBarsStaggered className="icon" /> Каталог</button></Link>
          <div className="searches">
            <div className="search">
              <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Поиск по товарам" />
              <button><IoIosSearch /></button>
            </div>
            <br />
            <div className="search_value">
              {
                searchValue.trim() ?
                  handleSearch(data).length ?
                    handleSearch(data)?.map(el =>
                      <div onClick={() => handleup3(el)} key={el.id}>
                        <img src={el.image} alt="" />
                        <li>{el.title}</li>
                      </div>
                    )
                    :
                    <p>Mahsulot topilmadi</p>
                  :
                  <></>
              }
            </div>
          </div>
        </div>
        <div className="nav_btn">
          <Link to={"/wishlist"}><button><CiHeart className="icon" />Избранное</button></Link>
          <button><FiBarChart className="icon" />Сравнение</button>
          <Link to={"/cart"}><button><BsCart className="icon" />Корзина</button></Link>
        </div>
      </nav>
    </>
  )
}

export default Nav

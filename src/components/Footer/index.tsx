import "./Footer.scss"
import Vector from "../../assets/Vector.png"
import Carts from "../../assets/carts.png"
import Vk from "../../assets/vk_contact.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="nav_logo">
          <h1><img src={Vector} alt="" /> NORNLIGHT</h1>
          <ul>
            <br />
            <strong>8 (800) 890-46-56</strong>
            <br />
            <br />
            <img src={Carts} alt="" />
            <br />
            <br />
            <li>Политика конфидециальности</li>
            <br />
            <li>Пользовательское соглашение</li>
            <div className="icons">
              <img src={Vk} alt="" />
              <img src={Vk} alt="" />
              <img src={Vk} alt="" />
            </div>
          </ul>
        </div>
        <ul>
          <strong>Покупателям</strong>
          <br />
          <br />
          <Link className="link" to={"/about_us"}><li>О компании</li></Link>
          <br />
          <Link className="link" to={"shipping_payment"}><li>Доставка и оплата</li></Link>
          <br />
          <Link className="link" to={"/return"}><li>Возврат</li></Link>
          <br />
          <Link className="link" to={"/garant"}><li>Гарантии</li></Link>
          <br />
          <Link className="link" to={"/contact"}><li>Контакты</li></Link>
          <br />
          <Link className="link" to={"/blog"}><li>Блог</li></Link>
        </ul>
        <ul>
          <strong>Товары</strong>
          <br />
          <br />
          <li>Люстры</li>
          <br />
          <li>Светильники</li>
          <br />
          <li>Бра</li>
          <br />
          <li>Торшеры</li>
          <br />
          <li>Комплектуюшие</li>
          <br />
          <li>Настольные лампы</li>
        </ul>
        <ul className="ul">
          <li>Споты</li>
          <br />
          <li>Трековые светильники</li>
          <br />
          <li>Уличные светильники</li>
          <br />
          <li>Технические светильники</li>
          <br />
          <li>Светодиодные ленты</li>
        </ul>
      </div>
    </>
  )
}

export default Footer

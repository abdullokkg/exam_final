import "./Footer.scss"
import Vector from "../../assets/Vector.png"
import Carts from "../../assets/carts.png"
import Vk from "../../assets/vk_contact.png"

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
          <li>О компании</li>
          <br />
          <li>Доставка и оплата</li>
          <br />
          <li>Возврат</li>
          <br />
          <li>Гарантии</li>
          <br />
          <li>Контакты</li>
          <br />
          <li>Блог</li>
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

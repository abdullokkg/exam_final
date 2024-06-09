import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <>
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                    <strong>Контакты</strong>
                </div>
                <div className="txt2">
                    <div>
                        <h1>Контакты</h1>
                    </div>
                    <div className="txts2">
                        <strong>8 (800) 890-46-56</strong>
                        <br />
                        <br />
                        <p>Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину<br /> Телефоны:</p>
                    </div>
                </div>
                <div className="catalogs_map2">
                    <div className="img">
                        <div className="map_txt">
                            <div>
                                <strong>Адрес магазина</strong>
                                <p>г. Москва, Дмитровское шоссе д.100с2</p>
                            </div>
                            <div>
                                <strong>Почта</strong>
                                <p>NORNLIGHT@mail.ru</p>
                            </div>
                            <div>
                                <strong>Телефон</strong>
                                <p>8 (800) 890-46-56</p>
                            </div>
                            <div>
                                <button>Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default Contact

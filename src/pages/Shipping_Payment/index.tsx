import { FaChevronRight } from "react-icons/fa6"
import map from "../../assets/map.png"

const Shipping_Payment = () => {
    return (
        <>
            <div className="catalog">
                <div className="home_txt">
                    <strong>Главная <FaChevronRight /></strong>
                    <strong>Доставка и оплата</strong>
                </div>
                <div className="txt">
                    <div>
                        <h1>Доставка и оплата</h1>
                    </div>
                    <div>
                        <strong>Доставка</strong>
                        <br />
                        <br />
                        <p>Мы осуществляем доставку со склада по Москве и Московской<br /> области собственной курьерской службой. Транспортными<br /> компаниями нашу продукцию мы доставляем по всей территории<br /> РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
                        <br />
                        <strong>Курьерская доставка</strong>
                        <br />
                        <br />
                        <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
                        <br />
                        <strong>Самовывоз</strong>
                        <br />
                        <br />
                        <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
                    </div>
                </div>
                <div className="catalogs_map">
                    <img src={map} alt="" />
                </div>
            </div>
        </>
    )
}

export default Shipping_Payment

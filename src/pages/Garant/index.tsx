import { FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"


const Garant = () => {
    return (
        <>
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                    <strong>Гарантии</strong>
                </div>
                <div className="txt">
                    <div>
                        <h1>Гарантии</h1>
                    </div>
                    <div>
                        <strong>Обмен и возврат по желанию покупателя</strong>
                        <br />
                        <br />
                        <p>Все товары в магазине «NornLight» имеют гарантию. <br /> Она заявляется производителем и имеет определенный срок<br /> действия на различные группы товаров. <br />
                            Если ваше изделие вышло из строя в течение гарантийного<br /> срока вы можете обратиться к нам и получить бесплатный ремонт. <br />  Для этого нужно:</p>
                        <ul className="ul">
                            <li>Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</li>
                            <li>Привезти товар к нам на склад или отправить его транспортной компанией.</li>
                            <li>Товар не имеет следов подключался и не имеет признаков монтажа;</li>
                            <li>После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</li>
                        </ul>
                        <p>Обращаем внимание, что «А-Свет» не является сервисным<br /> центром, а выполняет роль посредника между клиентом и<br /> поставщиком. <br />
                            Поэтому сроки проведения ремонта могут отличаться для<br /> товаров различных брендов.</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default Garant

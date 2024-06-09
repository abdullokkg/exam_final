import { FaArrowLeftLong, FaArrowRightLong, FaChevronRight } from "react-icons/fa6"
import products1 from "../../assets/products1.png"
import products2 from "../../assets/products2.png"
import products3 from "../../assets/products3.png"
import home1 from "../../assets/home1.png"
import home2 from "../../assets/home2.png"  
import home3 from "../../assets/home3.png"
import { Link } from "react-router-dom"

const About_us = () => {
    return (
        <>
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                    <Link to={"/about_us"}><strong>О компании</strong></Link>
                </div>
                <div className="txt">
                    <div>
                        <h1>О компании</h1>
                        <div className="cards2">
                            <div className="card">
                                <strong>170+ </strong>
                                <strong>Товаров</strong>
                            </div>
                            <br />
                            <div className="card">
                                <strong>1000+ </strong>
                                <strong>Довольных покупателей</strong>
                            </div>
                            <br />
                            <div className="card">
                                <strong>170+ </strong>
                                <strong>Товаров</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                        <br />
                        <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="product_txt">
                    <h1>Только проверенные бренды</h1>
                    <div>
                        <button><FaArrowLeftLong /></button>
                        <button><FaArrowRightLong /></button>
                    </div>
                </div>
                <div className="products">
                    <img src={products1} alt="" />
                    <img src={products2} alt="" />
                    <img src={products3} alt="" />
                    <img src={products1} alt="" />
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="catalog_txt">
                    <h1>Блог</h1>
                    <Link to={"/blog"}><button>Перейти в блог<FaArrowRightLong /></button></Link>
                </div>
                <div className="homes">
                    <div className="home">
                        <img src={home1} alt="" />
                        <br />
                        <br />
                        <h1>Как правильно освещать дом<br /> снаружи?</h1>
                        <br />
                        <p>01.01.2024</p>
                    </div>
                    <div className="home">
                        <img src={home2} alt="" />
                        <br />
                        <br />
                        <h1>Как правильно освещать дом<br /> снаружи?</h1>
                        <br />
                        <p>01.01.2024</p>
                    </div>
                    <div className="home">
                        <img src={home3} alt="" />
                        <br />
                        <br />
                        <h1>Как правильно освещать дом<br /> снаружи?</h1>
                        <br />
                        <p>01.01.2024</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default About_us

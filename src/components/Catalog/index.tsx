import "./Catalog.scss"
import { FaArrowRightLong } from "react-icons/fa6";
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png"
import card6 from "../../assets/card6.png"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import product from "../../assets/product.png"
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import products1 from "../../assets/products1.png"
import products2 from "../../assets/products2.png"
import products3 from "../../assets/products3.png"
import home1 from "../../assets/home1.png"
import home2 from "../../assets/home2.png"  
import home3 from "../../assets/home3.png"

const Catalog = () => {
    return (
        <>
            <div className="catalog">
                <div className="catalog_txt">
                    <h1>Каталог</h1>
                    <button>Весь каталог<FaArrowRightLong /></button>
                </div>
                <div className="cards">
                    <div className="card">
                        <strong>Люстры</strong>
                        <img src={card1} alt="" />
                        <strong>От 540₽<FaArrowRightLong /></strong>
                    </div>
                    <div className="card">
                        <strong>Светильники</strong>
                        <img src={card2} alt="" />
                        <strong>От 540₽<FaArrowRightLong /></strong>
                    </div>
                    <div className="card">
                        <strong>Бра</strong>
                        <img src={card3} alt="" />
                        <strong>От 540₽<FaArrowRightLong /></strong>
                    </div>
                    <div className="card">
                        <strong>Торшеры</strong>
                        <img src={card4} alt="" />
                        <strong>От 540₽<FaArrowRightLong /></strong>
                    </div>
                    <div className="card">
                        <strong>Настольные лампы</strong>
                        <img src={card5} alt="" />
                        <strong>От 540₽<FaArrowRightLong /></strong>
                    </div>
                    <div className="card">
                        <strong>Споты</strong>
                        <img src={card6} alt="" />
                        <strong>От 540₽<FaArrowRightLong /></strong>
                    </div>
                </div>
            </div>
            <div className="catalog">
                <div className="catalog_txt">
                    <h1>Почему NORNLIGHT?</h1>
                    <button>О компании<FaArrowRightLong /></button>
                </div>
                <div className="carts">
                    <div className="cart">
                        <img src={icon1} alt="" />

                        <h1>Только проверенные<br /> бренды</h1>
                        <br />
                        <p>Бренды, проверенные<br /> временем и качеством</p>
                    </div>
                    <div className="cart">
                        <img src={icon2} alt="" />
                        <h1>Самые низкие<br /> цены</h1>
                        <br />
                        <p>Ниже не будет нигде</p>
                    </div>
                    <div className="cart">
                        <img src={icon3} alt="" />
                        <h1>Быстрая доствка</h1>
                        <br />
                        <p>Доставляем по всей УР<br /> за 1-10 дней</p>
                    </div>
                    <div className="cart">
                        <img src={icon4} alt="" />
                        <h1>Большой<br /> ассортимент</h1>
                        <br />
                        <p>Более 1000 товаров</p>
                    </div>
                </div>
            </div>
            <div className="catalog">
                <div className="catalog_txt">
                    <h1>Популярные товары</h1>
                    <button>Все товары<FaArrowRightLong /></button>
                </div>
                <ul className="catalog_ul">
                    <li>Светильники</li>
                    <strong>Люстры</strong>
                    <strong>Лампы</strong>
                    <strong>Настольные лампы</strong>
                    <strong>Ночники</strong>
                    <strong>Подстветка</strong>
                    <strong>Уличное освещение</strong>
                    <strong>Мебельные установки</strong>
                </ul>
                <div className="products_card">
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                            <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                    <div className="product_card">
                        <div className="product_icons">
                            <img src={product} alt="" />
                            <CiHeart className="icon" />
                        </div>
                        <h1>Встраиваемый<br /> светильник Novotech</h1>
                        <br />
                        <s>7 000₽</s>
                        <div className="product_txt">
                             <strong>6 399₽</strong>
                            <button><CiShoppingCart /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog">
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
            </div>
            <div className="catalog">
                <div className="catalog_txt">
                    <h1>Блог</h1>
                    <button>Перейти в блог<FaArrowRightLong /></button>
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
            <div className="catalog">
                <div className="txt">
                    <div>
                        <h1>Производство<br /> светильников</h1>
                    </div>
                    <div>
                        <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog

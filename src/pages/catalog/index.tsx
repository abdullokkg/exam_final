import axios from "axios"
import { useEffect, useState } from "react"
import { FaArrowLeftLong, FaArrowRightLong, FaChevronRight } from "react-icons/fa6"
import products1 from "../../assets/products1.png"
import products2 from "../../assets/products2.png"
import products3 from "../../assets/products3.png"
import home1 from "../../assets/home1.png"
import home2 from "../../assets/home2.png"
import home3 from "../../assets/home3.png"
import { Link, useNavigate } from "react-router-dom"
import { CiHeart, CiShoppingCart } from "react-icons/ci"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store/store"
import { ID } from "../../redux/slice3/ids"
import { likeProduct } from "../../redux/slice/likeSlice"
import { cartproducts } from "../../redux/slice2/cartSlice"

const catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState("Lamps");
    const [tableLamps, setTableLamps] = useState([]);
    useEffect(() => {
        axios.get(`https://66607cbf5425580055b42150.mockapi.io/Chandilier?category=${selectedCategory}`)
            .then((response) => {
                setTableLamps(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, [selectedCategory]);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const handleup3 = (phone2) => {
        dispatch(ID(phone2))
        console.log(phone2);
        navigate("/id")
    }
    const handleup2 = (phone2) => {
        dispatch(likeProduct(phone2))
        console.log(phone2);
        navigate("/wishlist")
    }
    const handleup = (phone2) => {
        dispatch(cartproducts(phone2))
        console.log(phone2);
        navigate("/cart")
    }
    return (
        <>
            <div className="catalog">
                <ul className="catalog_ul">
                    <li onClick={() => setSelectedCategory("Lamps")}>Лампы</li>
                    <li onClick={() => setSelectedCategory("Chandilier")}>Люстры</li>
                    <li onClick={() => setSelectedCategory("Floor_lamp")}>Наполная лампа</li>
                    <li onClick={() => setSelectedCategory("Chandilier")}>Настольная лампа</li>
                    <li onClick={() => setSelectedCategory("Lamps")}>Разный лампы</li>
                    <li onClick={() => setSelectedCategory("Floor_lamp")}>Лампа для кухни</li>
                    <li onClick={() => setSelectedCategory("Chandilier")}>Лампа для стола</li>
                    <li onClick={() => setSelectedCategory("Lamps")}>Разно цветный лампы</li>
                </ul>
                <br />
                <br />
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                    <strong>Каталог</strong>
                </div>
                <br />
                <div className="catalog_txt">
                    <h1>Каталог</h1>
                </div>
                <div className="products_card">
                    {tableLamps.map((el) => (
                        <div className="product_card" key={el.id}>
                            <div className="product_icons">
                                <img onClick={() => handleup3(el)} src={el.image} alt="" />
                                <CiHeart className="icon" onClick={() => handleup2(el)} />
                            </div>
                            <h1 onClick={() => handleup3(el)}>{el.title}</h1>
                            <br />
                            <s onClick={() => handleup3(el)}>${el.price}</s>
                            <div className="product_txt">
                                <strong onClick={() => handleup3(el)}>${el.price}</strong>
                                <button onClick={() => handleup(el)}><CiShoppingCart /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <br />
                <br />
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
                <br />
                <br />
                <br />
                <div className="txt">
                    <div>
                        <h1>Производство<br /> светильников</h1>
                    </div>
                    <div>
                        <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют. <br /><br /> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default catalog

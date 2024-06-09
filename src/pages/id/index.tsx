import { FaChevronRight } from "react-icons/fa6"
import Vk from "../../assets/vk_contact.png"
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { likeProduct } from "../../redux/slice/likeSlice";
import { useEffect, useState } from "react";

const Id = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reduxProducts = useSelector((state: RootState) => state.id.id2.slice(0, 1))
    const handleup = (phone2) => {
        dispatch(cartproducts(phone2))
        console.log(phone2);
        navigate("/cart")
    }
    const handleup2 = (phone3) => {
        dispatch(likeProduct(phone3))
        console.log(phone3);
        navigate("/wishlist")
    }
    const [count, setCount] = useState(1)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <>
            {loading ? (
                <div className="loading"
                ><h1>
                        Загрузка продуктов...
                    </h1>
                </div>
            ) : (
                <>
                    <div className="catalog">
                        <div className="home_txt">
                            <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                        </div>
                        <br />
                        <br />
                        <br />
                        {
                            reduxProducts.map(el =>
                                <div key={el.id} className="detail">
                                    <div className="detail_img">
                                        <img src={el.image} alt="" />
                                    </div>
                                    <div className="detail_info">
                                        <h2>{el.title}</h2>
                                        <br />
                                        <strong>Scott</strong>
                                        <br />
                                        <br />
                                        <div className="detail_txt">
                                            <strong>{el.category}</strong>
                                            <div className="detail_txt_logo">
                                                <img src={Vk} alt="" />
                                                <img src={Vk} alt="" />
                                                <img src={Vk} alt="" />
                                                <img src={Vk} alt="" />
                                                <img src={Vk} alt="" />
                                            </div>
                                        </div>
                                        <br />
                                        <strong className="strong">В наличии</strong>
                                        <br />
                                        <br />
                                        <div className="cost">
                                            <h2>${el.price}</h2>
                                            <s>${el.price}</s>
                                        </div>
                                        <br />
                                        <br />
                                        <p>{el.description}</p>
                                        <br />
                                        <br />
                                        <div className="detail_btn">
                                            <div className="detail_count">
                                                <button onClick={() => setCount(count - 1)}>-</button>
                                                <strong>{count}</strong>
                                                <button onClick={() => setCount(count + 1)}>+</button>
                                            </div>
                                            <button onClick={() => handleup(el)}>В корзину</button>
                                            <CiHeart onClick={() => handleup2(el)} className="icon" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="catalog_txt">
                            <h1>Характеристика</h1>
                        </div>
                        <br />
                        <br />
                        <div className="characters">
                            <div className="characters_white">
                                <strong>Цвет</strong>
                                <strong>Жёлтый</strong>
                            </div>
                            <div className="characters_dark">
                                <strong>Год</strong>
                                <strong>2016</strong>
                            </div>
                            <div className="characters_white">
                                <strong>Диаметр колеса</strong>
                                <strong>27.5</strong>
                            </div>
                            <div className="characters_dark">
                                <strong>Материал рамы</strong>
                                <strong>Карбон</strong>
                            </div>
                            <div className="characters_white">
                                <strong>Размер</strong>
                                <strong>L</strong>
                            </div>
                            <div className="characters_dark">
                                <strong>Страна</strong>
                                <strong>Швейцария</strong>
                            </div>
                            <div className="characters_white">
                                <strong>Производитель</strong>
                                <strong>Scott</strong>
                            </div>
                            <div className="characters_dark">
                                <strong>Покрышки</strong>
                                <strong>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / <br /> PaceStar compound</strong>
                            </div>
                            <div className="characters_white">
                                <strong>Рама</strong>
                                <strong>Scale Carbon / HMX-технология / технология IMP / Коническая<br /> рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</strong>
                            </div>
                            <div className="characters_dark">
                                <strong>Подседельный Штырь</strong>
                                <strong>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: <br />Carbon 2B SDS / 34.9mm</strong>
                            </div>
                            <div className="characters_white">
                                <strong>Седло</strong>
                                <strong>Ritchey WCS Streem V3 Titanium rails</strong>
                            </div>
                            <div className="characters_dark">
                                <strong>Вилка</strong>
                                <strong>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / <br /> коническая рулевая труба / Удалённая блокировка, регулировка <br />отскока / ход 100mm</strong>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </>
            )}
        </>
    )
}

export default Id

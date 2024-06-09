import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { dislikeProduct } from "../../redux/slice2/cartSlice";

const Cart = () => {
    const [count, setCount] = useState(1);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();
    const reduxProducts = useSelector((state: RootState) => state.cartproduct.cart);

    const handleup2 = (phone3) => {
        dispatch(dislikeProduct(phone3));
        console.log(phone3);
    };

    const handleBuy = () => {
        
    };

    if (reduxProducts.length === 0) {
        return (
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}>
                        <strong>Главная <FaChevronRight /></strong>
                    </Link>
                    <Link to={"/catalog"}>
                        <strong>Каталог <FaChevronRight /></strong>
                    </Link>
                    <strong>Корзина</strong>
                </div>
                <div className="loading">
                    <h1>Ваша корзина пуста</h1>
                    <p>Добавьте товары в корзину, чтобы продолжить покупки.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                    <Link to={"/catalog"}><strong>Каталог <FaChevronRight /></strong></Link>
                    <strong>Корзина</strong>
                </div>
                <br />
                <div className="catalog_txt">
                    <h1>Корзина<span>{reduxProducts.length}</span></h1>
                </div>
                <br />
                <br />
                <br />
                <div className="cart_card">
                    <div className="cart_card_txt">
                        <strong>Фото</strong>
                        <strong>Товары</strong>
                        <strong>Название</strong>
                        <strong>Категория</strong>
                        <strong>Количество</strong>
                    </div>
                    {
                        reduxProducts.map(el =>
                            <div className="cart_card_option" key={el.id}>
                                <img src={el.image} alt="" />
                                <div className="cart_card_option_txt">
                                    <strong>{el.title}</strong>
                                    <strong>${el.price}</strong>
                                </div>
                                <strong>{el.title}</strong>
                                <strong>{el.category}</strong>
                                <div className="cart_card_btn">
                                    <button onClick={() => setCount(count - 1)}>-</button>
                                    <strong>{count}</strong>
                                    <button onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                <RiDeleteBin6Line onClick={() => handleup2(el)} className="icon" />
                            </div>
                        )
                    }
                </div>
                <br />
                <br />
                <div className="payment">
                    <div className="shiping">
                        <div className="catalog_txt">
                            <h1>Оформление</h1>
                        </div>
                        <br />
                        <br />
                        <div className="shiping_input">
                            <input type="text" placeholder="ФИО" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            <input type="text" placeholder="Телефон" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            <input type="text" placeholder="Электронная почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="delivery">
                        <div className="catalog_txt">
                            <h1>Доставка</h1>
                        </div>
                        <br />
                        <br />
                        <input type="text" placeholder="Адрес доставки" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <br />
                        <div className="input">
                            <input type="text" placeholder="Комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="pay">
                    <div className="payed">
                        <div className="catalog_txt">
                            <h1>Оплата</h1>
                        </div>
                        <div className="payed_txt">
                            <div>
                                <strong>Товары.............................................</strong>
                                <strong>12 300₽</strong>
                            </div>
                            <div>
                                <strong>Доставка.............................................</strong>
                                <strong>580₽</strong>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="cost">
                        <div className="catalog_txt">
                            <h1>12 800₽</h1>
                        </div>
                        <br />
                        <div>
                            <a href="https://t.me/python_methods_bot"><button onClick={handleBuy}>Купить</button></a>
                            <strong><IoCheckmarkCircle className="icon" /> Я согласен на обработку моих персональных данных</strong>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    );
};

export default Cart;

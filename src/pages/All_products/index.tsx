import { CiHeart, CiShoppingCart } from "react-icons/ci"
import { FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { cartproducts } from "../../redux/slice2/cartSlice";
import { likeProduct } from "../../redux/slice/likeSlice";
import { ID } from "../../redux/slice3/ids";
import { AppDispatch } from "../../redux/store/store";
import { useDispatch } from "react-redux";

const All_products = () => {
    const [tablelamps, setTableLamps] = useState([])
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
    useEffect(() => {
        axios.get("https://66607cbf5425580055b42150.mockapi.io/Chandilier")
            .then((response) => {
                setTableLamps(response.data)
            })
    })
    return (   
        <>
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight/></strong></Link>
                    <strong>Популярные товары</strong>
                </div>
                <br />
                <br />
                <br />
                <div className="catalog_txt">
                    <h1>Популярные товары</h1>
                </div>
                <br />
                <br />
                <br />
                <div className="products_card">
                    {
                        tablelamps.map(el =>
                            <div  className="product_card" key={el.id}>
                                <div className="product_icons">
                                    <img onClick={() => handleup3(el)} src={el.image} alt="" />
                                    <CiHeart onClick={() => handleup2(el)} className="icon" />
                                </div>
                                <h1 onClick={() => handleup3(el)}>{el.title}</h1>
                                <br />
                                <s onClick={() => handleup3(el)}>${el.price}</s>
                                <div className="product_txt">
                                    <strong onClick={() => handleup3(el)}>${el.price}</strong>
                                    <button onClick={() => handleup(el)}><CiShoppingCart /></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default All_products

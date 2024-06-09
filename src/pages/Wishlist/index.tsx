import { CiHeart, CiShoppingCart } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@reduxjs/toolkit/query"
import { dislikeProduct } from "../../redux/slice/likeSlice"

const Wishlist = () => {
    const dispatch = useDispatch()
    const reduxProducts = useSelector((state: RootState) => state.like.likedProducts)
    const handleup2 = (phone3) => {
        dispatch(dislikeProduct(phone3))
        console.log(phone3);
    }
    return (
        <>
            <div className="catalog">
                <div className="catalog_txt">
                    <h1>Избранные товары<span>{reduxProducts.length > 0 ? reduxProducts.length : '0'}</span></h1>
                </div>
                {reduxProducts.length === 0 && (
                    <div className="loading">
                        <p>Ваш список избранных товаров пуст. Добавьте товары в список избранных, чтобы сохранить их для покупки позже.</p>
                    </div>
                )}           
                <br />
                <br />
                <br />
                <div className="products_card">
                    {
                        reduxProducts.map(el =>
                            <div className="product_card" key={el.id}>
                                <div className="product_icons">
                                    <img src={el.image} alt="" />
                                    <CiHeart className="icon" onClick={() => handleup2(el)} />
                                </div>
                                <h1>{el.title}</h1>
                                <br />
                                <s>${el.price}</s>
                                <div className="product_txt">
                                    <strong>${el.price}</strong>
                                    <button><CiShoppingCart /></button>
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

export default Wishlist

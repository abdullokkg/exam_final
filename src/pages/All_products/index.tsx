import { CiHeart, CiShoppingCart } from "react-icons/ci"
import product from "../../assets/product.png"  
import { FaChevronRight } from "react-icons/fa";

const All_products = () => {
    return (   
        <>
            <div className="catalog">
                <div className="home_txt">
                    <strong>Главная <FaChevronRight/></strong>
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
            <br />
            <br />
            <br />
        </>
    )
}

export default All_products

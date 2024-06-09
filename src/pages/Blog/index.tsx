import { FaChevronRight } from "react-icons/fa6"
import home1 from "../../assets/home1.png"
import home2 from "../../assets/home2.png"
import home3 from "../../assets/home3.png"
import { Link } from "react-router-dom"


const Blog = () => {
    return (
        <>
            <div className="catalog">
                <div className="home_txt">
                    <Link to={"/"}><strong>Главная <FaChevronRight /></strong></Link>
                    <strong>Блог</strong>
                </div>
                <br />
                <br />
                <div className="catalog_txt">
                    <h1>Блог</h1>
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

export default Blog

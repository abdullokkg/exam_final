import axios from "axios"
import { useEffect, useState } from "react"
import { CiHeart, CiShoppingCart } from "react-icons/ci"
import Sidebar from "../sidebar/Sidebar"
import { RiDeleteBinLine } from "react-icons/ri"
import { IoMdCreate } from "react-icons/io"


const Manage_category = () => {
    const [tablelamps, setTableLamps] = useState([])
    useEffect(() => {
        axios.get("https://66607cbf5425580055b42150.mockapi.io/Chandilier/")
            .then((response) => {
                setTableLamps(response.data)
            })
    })
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://66607cbf5425580055b42150.mockapi.io/Chandilier/${id}`);
            setTableLamps(tablelamps.filter(product => product.id !== id));
            console.log("Продукт успешно удален");
        } catch (error) {
            console.error("Ошибка при удалении продукта:", error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.get(`https://66607cbf5425580055b42150.mockapi.io/Chandilier/${id}`);
            const productToUpdate = response.data;
            const updatedProduct = { ...productToUpdate, category: "Table lamps"};
            await axios.put(`https://66607cbf5425580055b42150.mockapi.io/Chandilier/${id}`, updatedProduct);
            setTableLamps(tablelamps.map(product => (product.id === id ? updatedProduct : product)));
            console.log("Продукт успешно обновлен");
        } catch (error) {
            console.error("Ошибка при обновлении продукта:", error);
        }
    };
    return (
        <>
            <div className="admin"><Sidebar />
                <div className="catalog2">
                    <br />
                    <br />
                    <strong>Manage category</strong>
                    <div className="products_card">
                    {tablelamps.map((el) => (
                        <div className="product_card" key={el.id}>
                            <h1>{el.category}</h1>
                            <div className="product_txt">
                                <div className="btn2">
                                    <button className="btn" onClick={() => handleUpdate(el.id)}><IoMdCreate /></button>
                                    <button onClick={() => handleDelete(el.id)}><RiDeleteBinLine /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default Manage_category

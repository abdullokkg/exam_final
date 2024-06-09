import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdCreate } from "react-icons/io";

const ManageProduct = () => {
    const [tableLamps, setTableLamps] = useState([]);

    useEffect(() => {
        axios.get("https://66607cbf5425580055b42150.mockapi.io/Chandilier")
            .then((response) => {
                setTableLamps(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, []); 

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://66607cbf5425580055b42150.mockapi.io/Chandilier/${id}`);
            setTableLamps(tableLamps.filter(product => product.id !== id));
            console.log("Продукт успешно удален");
        } catch (error) {
            console.error("Ошибка при удалении продукта:", error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.get(`https://66607cbf5425580055b42150.mockapi.io/Chandilier/${id}`);
            const productToUpdate = response.data;
            const updatedProduct = { ...productToUpdate, title: "Lapm", price: 1000 };
            await axios.put(`https://66607cbf5425580055b42150.mockapi.io/Chandilier/${id}`, updatedProduct);
            setTableLamps(tableLamps.map(product => (product.id === id ? updatedProduct : product)));
            console.log("Продукт успешно обновлен");
        } catch (error) {
            console.error("Ошибка при обновлении продукта:", error);
        }
    };

    return (
        <div className="admin">
            <Sidebar />
            <div className="catalog2">
                <br />
                <br />
                <strong>Manage product</strong>
                <div className="products_card">
                    {tableLamps.map((el) => (
                        <div className="product_card" key={el.id}>
                            <div className="product_icons">
                                <img src={el.image} alt="" />
                            </div>
                            <h1>{el.title}</h1>
                            <br />
                            <s>${el.price}</s>
                            <div className="product_txt">
                                <strong>${el.price}</strong>
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
    );
};

export default ManageProduct;

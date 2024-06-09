import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";

const CreateProduct = () => {
    const [tableLamps, setTableLamps] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        image: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("https://66607cbf5425580055b42150.mockapi.io/Chandilier", formData);
            console.log("Продукт успешно создан:", response.data);
            setTableLamps([...tableLamps, response.data]);
            setFormData({
                title: "",
                description: "",
                price: "",
                image: "",
                category: "",
            });
        } catch (error) {
            console.error("Ошибка при создании продукта:", error);
        }
    };

    useEffect(() => {
        
    }, []);

    return (
        <>
            <div className="admin">
                <Sidebar />
                <div className="create">
                    <strong>Create product</strong>
                    <br />
                    <div>
                        <strong>Title</strong>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                        <strong>Price</strong>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                        <strong>Image</strong>
                        <input type="text" name="image" value={formData.image} onChange={handleChange} />
                    </div>
                    <br />
                    <div>
                        <strong>Category</strong>
                        <select name="category" value={formData.category} onChange={handleChange}>
                            <option value="#">Tanlang</option>
                            <option value="Lamps">Lamps</option>
                            <option value="Chandilier">Chandilier</option>
                            <option value="Floor_lamp">Floor lamp</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <strong>Description</strong>
                        <div className="input">
                            <input type="text" name="description" value={formData.description} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <button onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;

import { useState } from "react";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

const CreateCategory = () => {
    const [category, setCategory] = useState("");

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`https://66607cbf5425580055b42150.mockapi.io/Chandilier`, { category });
            console.log("Категория успешно создана:", response.data);
            setCategory("");
        } catch (error) {
            console.error("Ошибка при создании категории:", error);
        }
    };
    

    return (
        <div className="admin">
            <Sidebar />
            <div className="create">
                <strong>Create category</strong>
                <br />
                <div>
                    <strong>Category</strong>
                    <input type="text" value={category} onChange={handleChange} />
                </div>
                <br />
                <button onClick={handleSubmit}>Create</button>
            </div>
        </div>
    );
};

export default CreateCategory;

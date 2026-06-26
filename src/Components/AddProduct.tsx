import type {ProductType} from "../Types/ProdType.ts";
import {type ChangeEvent, type SubmitEvent, useState} from "react";


type AddProductProps = {
    products: ProductType[];
    setProducts: (product: ProductType) => void;
}
const AddProduct = ({products, setProducts}:AddProductProps) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [isActive, setIsActive] = useState(false);
    const handlerSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form onSubmit={handlerSubmit} className="flex flex-col w-1/2 bg-white p-8 rounded-xl shadow-lg space-y-4">
                <div >
                    <label className="block mb-1 text-sm font-medium">
                        Назва товару
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Введіть назву"
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                {/* Ціна */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Ціна
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        placeholder="0"
                        min="0"
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>

                {/* URL зображення */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Зображення (URL)
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="https://..."
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                {/* Кількість */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Кількість
                    </label>
                    <input
                        type="number"
                        name="count"
                        value={price}
                        placeholder="0"
                        min="0"
                        className="w-full px-3 py-2 border rounded-lg"
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>

                {/* Категорія */}
                <div>
                    <label className="block mb-1 text-sm font-medium">
                        Категорія
                    </label>
                    <select
                        name="id_category"
                        className="w-full px-3 py-2 border rounded-lg"
                    >
                        <option value="">Оберіть категорію</option>
                        <option value="1">Ноутбуки</option>
                        <option value="2">Смартфони</option>
                        <option value="3">Навушники</option>
                    </select>
                </div>

                {/* Активний */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="is_active"
                        checked={isActive}
                        id="is_active"
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <label htmlFor="is_active">
                        Активний товар
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg"
                >
                    Створити товар
                </button>
            </form></div>)
}

export default AddProduct;
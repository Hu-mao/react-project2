import styles from './App.module.css';
import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    image?: string;
};

type Props = {
    product: Product;
};

function AddLike({ product }: Props) {
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        const favorites: Product[] =
            JSON.parse(localStorage.getItem("favorites") || "[]");

        const exists = favorites.some(
            (item) => item.id === product.id
        );

        setLiked(exists);
    }, [product.id]);

    const toggleFavorite = () => {
        const favorites: Product[] =
            JSON.parse(localStorage.getItem("favorites") || "[]");

        const exists = favorites.some(
            (item) => item.id === product.id
        );

        if (exists) {
            // Видаляємо з улюблених
            const updatedFavorites = favorites.filter(
                (item) => item.id !== product.id
            );

            localStorage.setItem(
                "favorites",
                JSON.stringify(updatedFavorites)
            );

            setLiked(false);
        } else {
            // Додаємо в улюблені
            favorites.push(product);

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

            setLiked(true);
        }
    };

    return (
        <button
            onClick={toggleFavorite}
            id="like"
            className={`${styles.like} transition duration-200 w-10 h-10 rounded-md text-2xl text-blue-400`}
        >
            {liked ? "♥" : "♡"}
        </button>
    );
}
export default AddLike;
import styles from './App.module.css';
//🛒︎
type Product = {
    id: number;
    title: string;
    price: number;
    image?: string;
};

type Props = {
    product: Product;
};

function AddToBasket({ product }: Props) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const index = cart.findIndex(
        (item: Product & { quantity: number }) =>
            item.id === product.id
    );

    if (index !== -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    return (
        <button id="ATBasket" className={`${styles.ATBasket} transition duration-200 absolute left-[82.5%] top-[85%] bg-red-600 text-white text-xl w-10 h-10 bold rounded-md`}>
            🛒︎
        </button>
    );
}
export default AddToBasket;
// 🛒︎
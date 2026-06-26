import styles from './App.module.css';
function AddToBasket() {
    return (
        <button id="ATBasket" className={`${styles.ATBasket} transition duration-200 absolute left-[82.5%] top-[85%] bg-red-600 text-white text-xl w-10 h-10 bold rounded-md`}>
            🛒︎
        </button>
    );
}
export default AddToBasket;
// 🛒︎
import AddToBasket from "./Types/AddToBasket.tsx";
import styles from './Types/App.module.css';
import AddLike from "./Types/AddLike.tsx";
function App() {


    return (
        <ul className="bg-gray-300 h-92 w-145 flex justify-center">
            <li className={"bg-white p-5 w-70 h-90 m-auto relative"}>
                <img src="https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/e/h/eh187k_black.webp" />
                <AddLike product={{
                    id: 1,
                    title: "Навушники Esperanz EH187K Black",
                    price: 229,
                    image: "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/e/h/eh187k_black.webp"
                }} />
                <div className="text-lg mt-5">Навушники Esperanz EH187K Black</div>
                <div>
                    <span className="text-yellow-600 text-xs">★</span>
                    <span className="text-xs text-gray-300"> ★ ★ ★ ★</span>
                    <div  className="text-xl absolute top-[280px] left-[95px]">💬</div>
                    <div id="comments" className={`${styles.comments} absolute top-[285.5px] left-[130px]`}>1</div>
                </div>

                <div id="cost" className={styles.cost}>229 ₴</div>
                <AddToBasket
                    product={{
                        id: 1,
                        title: "Навушники Esperanz EH187K Black",
                        price: 229,
                        image: "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/e/h/eh187k_black.webp"
                    }}
                />
            </li>
            <li className={"bg-white p-5 w-70 h-90 m-auto relative"}>
                <img src="https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/c/n/cnd-gtws2o_.webp" />
                <AddLike product={{
                    id: 2,
                    title: "Навушники Canyon GTWS2 (CND-GTWS2O) Orange",
                    price: 529,
                    image: "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/c/n/cnd-gtws2o_.webp"
                }}/>
                <div className="text-lg mt-5">Навушники Canyon GTWS2 (CND-GTWS2O) Orange</div>
                <div>
                    <span className="text-yellow-600 text-xs">★</span>
                    <span className="text-xs text-gray-300"> ★ ★ ★ ★</span>
                    <div  className="text-xl absolute top-[280px] left-[95px]">💬</div>
                    <div id="comments" className={`${styles.comments} absolute top-[285.5px] left-[130px]`}>27</div>
                </div>
                <div id="cost" className={`text-gray-400 top-[311px] absolute text-xs line-through`}>629 ₴</div>
                <div id="cost" className={`${styles.cost} text-red-600 top-[310px] absolute`}>529 ₴</div>
                <AddToBasket
                    product={{
                        id: 2,
                        title: "Навушники Canyon GTWS2 (CND-GTWS2O) Orange",
                        price: 529,
                        image: "https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/c/n/cnd-gtws2o_.webp"
                    }}
                />
            </li>
        </ul>
    );
}
export default App;
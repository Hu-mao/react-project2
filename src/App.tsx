//  import {useState} from "react";
// import styleApp from "./Types/App.module.css"

 // У проект з лічильником додати наступний функціонал
 // Коли значення лічильника стає 0 кнопка - (Down)
 // повинна стати не активною. Зробіть це через додавання сss класу,
 //     використайте css модулі.
 //     Так само кнопка + (Up) повинна ставати неактивною коли значення
 // лічильника досягає 100
 // Коли значення лічильника стає 0 або 100 виводи значення на лічильнику
 // червоним жирним кольором, шрифт 28px
// function App() {
//     let [value, setValue] = useState(50)
//     let [check, setCheck] = useState(true);
//     let [check1, setCheck1] = useState(true);
//     return (
//         <>
//             <p className={value === 0 || value === 100 ? styleApp.redCou : ""} >Value:{value}</p>
//             <button
//                 disabled={!check} onClick={() =>
//             {
//                 setValue(value + 10);
//                 if (value < 90) {
//                 setCheck(true);
//                 setCheck1(true);
//                 } else {
//                 setCheck(false);
//                 }
//             }}>Up</button>
//             <button disabled={!check1} onClick={() =>
//             {
//                 setValue(value - 10);
//                 if (value > 10) {
//                     setCheck1(true);
//                     setCheck(true);
//                 } else {
//                     setCheck1(false);
//                 }
//             }}>Down</button>
//         </>)
// }
// export default App


/* Додати в інтерфейс поле для count і для is_active (checkbox)
 В параграф виводи значення count і якщо is_active true то вивести слово "Active",
     інакше "Non active"*/
/*function App() {
    const[product, setProduct] = useState<ProductType>({
        title : "Bread",
        count: 1,
        price : 35,
        is_active: false
    })
    function changeTitle(e:ChangeEvent<HTMLInputElement>) {
        setProduct({...product, title:e.target.value})
    }
    function changePrice(e:ChangeEvent<HTMLInputElement>) {
        setProduct({...product, price:+e.target.value})
    }
    return (
        <>
            <h3>Product</h3>

            <p>
                Title: {product.title} Price: {product.price}
            </p>

            Title:
            <input
                type="text"
                value={product.title}
                onChange={changeTitle}
            />

            Price:
            <input
                type="number"
                value={product.price}
                onChange={changePrice}
            />

            <br />

            <input
                type="number"
                value={product.count}
                onClick={is_active ? true : false}
            />

            <p>
                Count: {is_active ? product.count * product.price : "Non active"}
            </p>
        </>
    )
}

export default App*/


 /*const [product, setProduct] = useState({
     title: "Bread",
     count: 1,
     price: 35,
     is_active: false
 });

 function changeTitle(e: ChangeEvent<HTMLInputElement>) {
     setProduct({
         ...product,
         title: e.target.value
     });
 }

 function changePrice(e: ChangeEvent<HTMLInputElement>) {
     setProduct({
         ...product,
         price: +e.target.value
     });
 }

 function changeCount(e: ChangeEvent<HTMLInputElement>) {
     setProduct({
         ...product,
         count: +e.target.value
     });
 }

 function changeActive(e: ChangeEvent<HTMLInputElement>) {
     setProduct({
         ...product,
         is_active: e.target.checked
     });
 }

 return (
     <>
         <h3>Product</h3>

         <p>
             Title: {product.title} Price: {product.price}
         </p>

         Title:
         <input
             type="text"
             value={product.title}
             onChange={changeTitle}
         />

         <br />

         Price:
         <input
             type="number"
             value={product.price}
             onChange={changePrice}
         />

         <br />

         Count:
         <input
             type="number"
             value={product.count}
             onChange={changeCount}
         />

         <br />

         Active:
         <input
             type="checkbox"
             checked={product.is_active}
             onChange={changeActive}
         />

         <p>
             Count: {product.count} —{" "}
             {product.is_active ? "Active" : "Non active"}
         </p>*/
 // function App() {
 //
 //     const cards: CardType[] = [
 //         {
 //             title: "React",
 //             description: "Library for building UI",
 //             views: 1200,
 //             is_show: true
 //         },
 //         {
 //             title: "TypeScript",
 //             description: "Typed JavaScript",
 //             views: 950,
 //             is_show: true
 //         },
 //         {
 //             title: "Node.js",
 //             description: "Backend runtime for JavaScript",
 //             views: 700,
 //             is_show: false
 //         },
 //         {
 //             title: "Next.js",
 //             description: "React framework",
 //             views: 1500,
 //             is_show: true
 //         },
 //         {
 //             title: "MongoDB",
 //             description: "NoSQL database",
 //             views: 400,
 //             is_show: false
 //         }
 //     ];
 //
 //     return (
 //         <>
 //             <table border={1}>
 //                 <thead>
 //                 <tr>
 //                     <th>Title</th>
 //                     <th>Description</th>
 //                     <th>Views</th>
 //                     <th>Is_show</th>
 //                 </tr>
 //                 </thead>
 //
 //                 <tbody>
 //                 {
 //                     cards.map((card, index) => {
 //                         return (
 //                             <tr key={index}>
 //                                 <td>{card.title}</td>
 //                                 <td>{card.description}</td>
 //                                 <td>{card.views}</td>
 //                                 <td>
 //                                     {card.is_show ? "true" : "false"}
 //                                 </td>
 //                             </tr>
 //                         )
 //                     })
 //                 }
 //                 </tbody>
 //             </table>
 //         </>
 //     );
 // }
 // export default App;
 //
 //
 //
 // type ButtonProps = {
 //     text: string;
 // };
 //
 // const Button = ({ text }: ButtonProps) => {
 //     return (
 //         <button className="bg-green text-white font-semibold">
 //             {text}
 //         </button>
 //     );
 // };
 //
 // export default Button;
// import AddToBasket from "./Types/AddToBasket.tsx";
// import styles from './Types/App.module.css';
// function App() {
//     return (
//         <ul className="bg-gray-300 h-92 w-145 flex justify-center">
//             <li className={"bg-white p-5 w-70 h-90 m-auto relative"}>
//                 <img src="https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/e/h/eh187k_black.webp" />
//                 <button id="like" className={`${styles.like} transition duration-200 w-10 h-10 rounded-md text-2xl text-blue-400`}>♡</button>
//                 <div className="text-lg mt-5">Навушники Esperanz EH187K Black</div>
//                 <div>
//                     <span className="text-yellow-600 text-xs">★</span>
//                     <span className="text-xs text-gray-300"> ★ ★ ★ ★</span>
//                     <div  className="text-xl absolute top-[280px] left-[95px]">💬</div>
//                     <div id="comments" className={`${styles.comments} absolute top-[285.5px] left-[130px]`}>1</div>
//                 </div>
//
//                 <div id="cost" className={styles.cost}>229 ₴</div>
//                 <AddToBasket />
//             </li>
//             <li className={"bg-white p-5 w-70 h-90 m-auto relative"}>
//                 <img src="https://i.allo.ua/media/catalog/product/cache/3/small_image/212x184/9df78eab33525d08d6e5fb8d27136e95/c/n/cnd-gtws2o_.webp" />
//                 <button id="like" className={`${styles.like} transition duration-200 w-10 h-10 rounded-md text-2xl text-blue-400`}>♡</button>
//                 <div className="text-lg mt-5">Навушники Canyon GTWS2 (CND-GTWS2O) Orange</div>
//                 <div>
//                     <span className="text-yellow-600 text-xs">★</span>
//                     <span className="text-xs text-gray-300"> ★ ★ ★ ★</span>
//                     <div  className="text-xl absolute top-[280px] left-[95px]">💬</div>
//                     <div id="comments" className={`${styles.comments} absolute top-[285.5px] left-[130px]`}>27</div>
//                 </div>
//                 <div id="cost" className={`text-gray-400 top-[311px] absolute text-xs line-through`}>629 ₴</div>
//                 <div id="cost" className={`${styles.cost} text-red-600 top-[310px] absolute`}>529 ₴</div>
//                 <AddToBasket />
//             </li>
//         </ul>
//     );
// }

import ProductsList from "./Components/ProductList.tsx";
// import AddProduct from "./Components/AddProduct.tsx";
import { useState} from "react";
import productData from "./models/products.ts"
function App() {
    const [products, setProducts] = useState(productData)
    return (<>
        <ProductsList products={products}/>
        <AddProduct setProduct={setProducts} products={products}/>
    </>)
}
export default App;
 import {useState} from "react";
import './App.css'
// import type {ProductType} from "./Types/ProdType.ts";

 // У проект з лічильником додати наступний функціонал
 // Коли значення лічильника стає 0 кнопка - (Down)
 // повинна стати не активною. Зробіть це через додавання сss класу,
 //     використайте css модулі.
 //     Так само кнопка + (Up) повинна ставати неактивною коли значення
 // лічильника досягає 100
 // Коли значення лічильника стає 0 або 100 виводи значення на лічильнику
 // червоним жирним кольором, шрифт 28px
function App() {
    let [value, setValue] = useState(50)
    let [check, setCheck] = useState(true);
    let [check1, setCheck1] = useState(true);
    return (
        <>
            <p>Value:{value}</p>
            <button className={"Up"} disabled={!check} onClick={() =>
            {
                if (value < 100) {
                setValue(value + 10);
                setCheck(true);
                } else {
                setCheck(false);
                }
            }}>Up</button>
            <button className={"Down"} disabled={!check1} onClick={() =>
            {
                if (value < 100) {
                    setValue(value + 10);
                    setCheck(true);
                } else {
                    setCheck(false);
                }
            }}>Down</button>
        </>)
}
export default App


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

// import { useRef, useState } from "react";
//
// function Pr() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const emailRef = useRef(null);
//
//     const focusEmail = () => {
//         emailRef.current.focus();
//     };
//
//     const clearFields = () => {
//         setName("");
//         setEmail("");
//     };
//
//     return (
//         <>
//             <input
//                 type="text"
//                 placeholder="Ім'я"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 ref={emailRef}
//             />
//
//             <button onClick={focusEmail} className="p-10">
//                 Перейти до Email
//             </button>
//
//             <button onClick={clearFields}>
//                  Очистити всі поля
//             </button>
//         </>
//     );
// }
//
import ProductList from "./Components/ProductList.tsx";
import AddProduct from "./Components/AddProduct.tsx";
function Pr(){
    return (
        <>
            <ProductList />
            <AddProduct />
        </>
    )
}
export default Pr;
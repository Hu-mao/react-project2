/*
#1
Створіть додаток «Улюблений фільм», який міститиме інформацію про ваш улюблений фільм:
назву фільму, ПІБ режисера, рік випуску, кіностудія, афіша і т. д.
Обов'язково використовуйте компоненти та props, функціональні компоненти.
*/
// function App({ name, director, ProdYear, fStudio }: Film) {
//     return (
//         <>
//             <h2>Улюблений фільм</h2>
//             <h3>Name: {name}</h3>
//             <p>Dir: {director}</p>
//             <p>Year: {ProdYear}</p>
//             <p>Film studio: {fStudio}</p>
//         </>
//     );
// }
//
// export default App

/*Завдання 2
Створіть додаток «Персональна сторінка»,
який міститиме інформацію про вас (ПІБ, телефон, email, місто проживання, досвід роботи, навички, фотографію і т. д.).
Обов'язково використовуйте компоненти, props, функціональні компоненти.*/
import * as React from "react";
import type {Profile} from "./Types/dz1106.ts";
class App2 extends React.Component {
    profile: Profile = {
        fullName: "1",
        phone: "2",
        email: "3",
        city: "4"
    };
    render() {
        return(
        <>
            <h1>Персональна сторінка</h1>
            <p>{this.profile.fullName},{this.profile.phone},{this.profile.email},{this.profile.city},</p>
        </>)
    }
}
export default App2
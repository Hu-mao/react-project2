/*
export type ProdType = {
    title: string,
    price: number;
}*/
export type ProductType = {
    id: string|number;
    title:string,
    count?: number,
    price:number,
    is_active?: boolean, //check box
    image?:string,
    id_category?:string|number,
}

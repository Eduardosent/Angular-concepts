export const productList : Product[] = [
    {id:1,name:"phone",price:80,description:"phone description"},
    {id:2,name:"earphone",price:20,description:"earphone description"},
    {id:3,name:"screen",price:500,description:"screen description"},
    {id:4,name:"radio",price:100},
]
export interface Product{
    id: number | string,
    name: string,
    price: number ,
    description?: string
}
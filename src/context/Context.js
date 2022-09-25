import { createContext } from "react"
import { PRODUCTS } from "../app/shared/PRODUCTS";

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(9)].map(() => ({
        id: PRODUCTS..id, 
        name: PRODUCTS.datatype.name,
        price: PRODUCTS.datatype.price,
        image: PRODUCTS.datatype.image,
        featured: PRODUCTS.datatype.boolean,
    }));

    console.log(products)

    return (
        <Cart.Provider>
            {children}
        </Cart.Provider>
    )
};

export default Context;
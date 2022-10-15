import { PRODUCTS } from "./products"

export const selectAllProducts = () => {
    return PRODUCTS; 
}

export const selectRandomProduct = () => {
    return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
};
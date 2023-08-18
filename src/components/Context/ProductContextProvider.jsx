import React from 'react'
import { createContext, useState } from 'react'
export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
    const [productDetail, setProductDetail] = useState(null);
    const [product, setProduct] = useState([])
    const [selectMenu, setSelectMenu] = useState('');
    const sortProduct = (order) => {
        const sortedProduct = [...product];
        sortedProduct.sort((a, b) => {
            if (order === 'A-Z') {
                return a.name.localeCompare(b.name)
            } else if (order === 'Z-A') {
                return b.name.localeCompare(a.name)
            }
            else if (order === 'Giá tăng dần') {
                return a.price - b.price;
            }
            else if (order === 'Giá giảm dần') {
                return b.price - a.price;
            }
        });
        setProduct(sortedProduct)
    }
    return (
        <ProductContext.Provider value={{
            productDetail,
            setProduct,
            setProductDetail,
            product,
            selectMenu,
            setSelectMenu,
            sortProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}



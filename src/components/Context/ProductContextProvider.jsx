import React from 'react'
import { createContext, useState } from 'react'
export const ProductContext = createContext();
export function ProductContextProvider({ children }) {
    const [productDetail, setProductDetail] = useState(null);
    const [value, setValue] = useState([0, 1000000]);
    const [filterProduct, setFilterProduct] = useState([])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInputChange = (index) => (event) => {
        const newValue = [...value];
        newValue[index] = event.target.value === '' ? 0 : Number(event.target.value);
        setValue(newValue);
    };
    const valueLabelFormat = (value) => {
        return `${value.toLocaleString()}VNĐ`;
    };
    const [product, setProduct] = useState([])
    const [selectMenu, setSelectMenu] = useState('');
    const handleClickSort = () => {
        const filtered = product.filter(item => item.price >= value[0] && item.price <= value[1]);
        setFilterProduct(filtered)
    }
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
        setFilterProduct(sortedProduct)

    }
    return (
        <ProductContext.Provider value={{
            productDetail,
            setProduct,
            setProductDetail,
            product,
            selectMenu,
            setSelectMenu,
            sortProduct,
            value,
            handleChange,
            handleInputChange,
            valueLabelFormat,
            handleClickSort,
            filterProduct,
            setFilterProduct

        }}>
            {children}
        </ProductContext.Provider>
    )
}



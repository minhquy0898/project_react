import React from 'react'
import { createContext, useState } from 'react'
export const ProductContext = createContext();
export function ProductContextProvider({ children }) {
    const [newOrder, setNewOrder] = useState(null);
    const [productDetail, setProductDetail] = useState(null);
    const [value, setValue] = useState([0, 1000000]);
    const [filterProduct, setFilterProduct] = useState([])
    const [product, setProduct] = useState([])
    const [selectMenu, setSelectMenu] = useState('');
    const [selectType, setSelectType] = useState([])
    const [cart, setCart] = useState([])

    const handleClick = (event) => {
        let value = event.target.value;
        console.log(value);
        if (selectType.includes(value)) {
            setSelectType(selectType.filter(type => type !== value))
        } else {
            setSelectType([...selectType, value])
        }
    }
    const sortTypeProduct = () => {
        if (selectType.length === 0) {
            setFilterProduct(product);
        } else {
            const filteredProducts = product.filter(item =>
                item && item.tags && selectType.includes(item.tags)
            );
            setFilterProduct([...filteredProducts]);
        }
    }
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


    // Mua hàng :
    const [countCart, setCountCart] = useState(0);
    const handleClickBuy = (item) => {
        setCountCart(prevCount => prevCount + 1);
        setCart(prevCart => [...prevCart, item]);
        console.log(cart)
    }
    let [quantityCount, setQuantityCount] = useState(1);
    const handleChangeQuantity = (change) => {
        if (change === 'increase') {
            quantityCount++
        } else if (change === 'decrease' && quantityCount > 1) {
            quantityCount--
        }
        setQuantityCount(quantityCount)
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
            setFilterProduct,
            selectType,
            handleClick,
            sortTypeProduct,
            countCart,
            handleClickBuy,
            quantityCount,
            handleChangeQuantity,
            cart,
            setCart,
            setCountCart,
            newOrder,
            setNewOrder
        }}>
            {children}
        </ProductContext.Provider>
    )
}



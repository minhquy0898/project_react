import React, { useState } from 'react'
import ListItemProduct from './ListItemProduct'
const data = [
    {
        content: "Mới nhất",
        img: "https://bizweb.dktcdn.net/thumb/small/100/191/458/products/9-4-df6e6054-0c41-4235-bc57-be3c8c406cd4.jpg?v=1528211760227",
        nameItem: "Nhẫn",
        titleItem: "Nhẫn vòng ADV",
        price: "700.000đ"
    },
    {
        content: "Nổi bật",
        img: "https://bizweb.dktcdn.net/thumb/small/100/191/458/products/8-1-26e44d88-8656-4580-9ce6-9ef0518d26f3.jpg?v=1490840698907",
        nameItem: "Bông tai",
        titleItem: "Bông tai cao cấp BIZ",
        price: "350.000đ"
    },
    {
        content: "Bán chạy",
        img: "https://bizweb.dktcdn.net/thumb/small/100/191/458/products/1-50c08fa3-64b2-4b4b-b347-e8bb9ca7689c.jpg?v=1490840661093",
        nameItem: "Nhẫn",
        titleItem: "Nhẫn ngọc trai cao cấp",
        price: "900.000đ"
    }

]
const ProductItem = () => {
    const [isShowModalItem, setIsShowModalItem] = useState(false)
    const [dataDetailItem, setDataDetailItem] = useState({})
    return (
        <div className='product_item'>
            {data && data.map((item, index) => {
                return (
                    <>
                        <ListItemProduct setDataDetailItem={setDataDetailItem} setIsShowModalItem={setIsShowModalItem} key={index} img={item.img} nameItem={item.nameItem} titleItem={item.titleItem} price={item.price} content={item.content} />

                    </>
                )
            })}
        </div>
    )
}

export default ProductItem

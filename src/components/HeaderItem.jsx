import React from 'react'
import { AiOutlineShoppingCart, AiOutlinePhone, } from 'react-icons/ai';
import { BiTimeFive, BiUserCircle } from 'react-icons/bi';
import { PiBusDuotone } from 'react-icons/pi';


const HeaderItem = (props) => {
    const label = props.label
    const Icon = props.Icon
    const renderIcon = () => {
        switch (Icon) {
            case 'AiOutlineShoppingCart':
                return <AiOutlineShoppingCart size={20} color='#ffffff' />
            case 'BiTimeFive':
                return <BiTimeFive size={30} color='#ffffff' />
            case 'PiBusDuotone':
                return <PiBusDuotone size={30} color='#ffffff' />
            case 'AiOutlinePhone':
                return <AiOutlinePhone size={28} color='#ffffff' />
            case 'BiUserCircle':
                return <BiUserCircle size={26} color='#ffffff' />
            default:
                return null;
        }
    }
    const rendertext = () => {
        let text1 = [];
        let text2 = [];
        let arrLabel = label.split(' ');
        for (let i = 0; i < arrLabel.length; i++) {
            if (i < 5) {
                text1.push(arrLabel[i]);
            } else {
                text2.push(arrLabel[i]);
            }
        } return (
            <div>
                <div>{text1.join(' ')}</div>
                <div>{text2.join(' ')}</div>
            </div>
        )
    }
    return (
        <div className='header-item__container'>
            {renderIcon()}
            {label && label.length > 18 ? rendertext() : (<p>{label}</p>)}

        </div>
    )
}

export default HeaderItem

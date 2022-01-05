import {CartProvider, useCart} from 'contexts/cart/cart.provider';
import {
    CartItemBase,
    CartItemImage,
    CartItemContent,
    CartItemTotalWrapper, ItemCardType
} from './utils/theme';

import CounterAlt from "./animated-counter";
import {ReactComponent as CloseBtn} from "../assets/image/close_btn.svg";
import React, {useContext} from "react";
import {DrawerContext} from "../contexts/drawer/drawer.provider";


interface ItemProps {
    image: string;
    name: string;
    price: number;
    type: string;
    description: string;
    quantity: number;
    spec: string;
    boxCapacity: number;
}

type CartItemProps = {
    item: ItemProps;
};


const CartItem: React.FC<CartItemProps> = ({item}) => {

    const {dispatch} = useContext(DrawerContext);
    const {addItem, removeItem, removeItemFromCart} = useCart();




    return (
        <div className={CartItemBase}>
            <div className={CartItemImage}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={CartItemContent}>

                <div>
                    <span className='nrz-primary-1 mb-4'>{item.name}</span>
                    <div className='flex flex-row mt-2 item-start'>
                        <span className='nrz-primary-3 flex flex-row place-content-stretch'>{item.spec}; </span>
                        <span className='nrz-primary-3 flex flex-row place-content-stretch ml-2'>{item.type}</span>
                        <span className='nrz-primary-3 flex flex-row place-content-stretch ml-2'>{item.boxCapacity} шт. / коробка</span>
                    </div>
                </div>
                <br/>
                <div className={CartItemTotalWrapper} style={{height: "41px"}}>
                    <CounterAlt
                        widthClass="cart-counter-wrapper"
                        value={item.quantity}
                        boxCapacity={item.boxCapacity}
                        onIncrement={() => addItem(item)}
                        onDecrement={() => removeItem(item)}
                    />
                </div>
            </div>

            <div className='absolute top-30px right-0 cursor-pointer'> <CloseBtn  onClick={() => removeItemFromCart(item)}/> </div>

        </div>
    );
};

export default CartItem;

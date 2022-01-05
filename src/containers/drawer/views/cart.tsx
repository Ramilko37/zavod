import {useState, useContext} from 'react';
import {Scrollbar} from 'components/scrollbar';
import {useCart} from 'contexts/cart/cart.provider';
import {DrawerContext} from 'contexts/drawer/drawer.provider';
import CartItem from 'components/cart-item';
import Button from 'components/button';
import NoItem from './no-item';
import ArrowLeft from 'assets/icons/arrow-left';
import {CURRENCY} from 'helpers/constants';

export default function Cart() {
    const {dispatch} = useContext(DrawerContext);

    const {items, calculatePrice, calculateTotalBox, calculateTotalQuantity} = useCart();

    const showCheckout = () => {
        dispatch({
            type: 'TOGGLE_CHECKOUT_VIEW',
            payload: {
                showCheckout: true,
            },
        });
    };

    const hideCart = () => {
        dispatch({
            type: 'SLIDE_CART',
            payload: {
                open: false,
            },
        });
    };

    return (
        <div className="flex flex-col w-full h-full">
            {items.length ? (
                <>
                    <div className="w-full flex justify-center relative py-50px border-gray-200">
                        <button
                            className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-0 transition duration-300 focus:outline-none hover:text-gray-900"
                            onClick={hideCart}
                            aria-label="close"
                        >
                            {/*<ArrowLeft/>*/}
                            <span className='drawer-cart-close cursor-pointer hover:opacity-60'>Закрыть</span>
                        </button>

                        <h2 className="drawer-cart-title m-0">Ваша заявка</h2>
                    </div>

                    <Scrollbar className="cart-scrollbar flex-grow">
                        {items.map((item) => (
                            <CartItem item={item} key={item.id}/>
                        ))}
                    </Scrollbar>
                </>
            ) : (
                <NoItem/>
            )}


            <div className="flex cart-total-container justify-between">
                <div className="flex flex-col items-start">
          <span className="cart-total-title">
            Итого &nbsp;

          </span>

                    <span className="cart-total-text">
                        {calculateTotalBox() + " штук / " + calculateTotalQuantity() + " коробок"}
          </span>
                </div>

                <Button
                    className="bg-blue-900 drawer-cart-btn cursor-pointer"
                    disabled={!items.length}
                    onClick={showCheckout}
                >
                    К оформлению
                </Button>
            </div>
        </div>
    );
}

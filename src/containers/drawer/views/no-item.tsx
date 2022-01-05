import React, { useState, useContext } from 'react';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import ArrowLeft from 'assets/icons/arrow-left';
import {ReactComponent as EmptyCart} from '../../../assets/image/empty-cart.svg';

export default function NoItem() {
  const { dispatch } = useContext(DrawerContext);
  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };

  return (
    <>
      <div className="w-full flex justify-center flex-shrink-0 relative px-30px py-20px mb-30px">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          onClick={hideCart}
          aria-label="close"
        >
          {/*<ArrowLeft />*/}
          <span className='drawer-cart-close cursor-pointer hover:opacity-60'>Назад</span>
        </button>
        <h2 className="no-item-title">Ваша заявка</h2>
      </div>

      <div className="flex-auto">
        <EmptyCart className='no-item-img' />

        <p className="no-item-description">
          Сейчас ваша заявка пуста
        </p>
        <p className='no-item-paragraph'>Вы можете посмотреть наши маски в каталоге,
          либо все равно можете отправить нам заявку с комментариями, что Вы хотите заказать, если Вам нужен индивидуальный заказ.</p>

        <div className="flex items-center justify-center mt-40px md:mt-95px">

        </div>
      </div>
    </>
  );
}

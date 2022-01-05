import React, { useContext, useState, useEffect, useRef } from "react";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import FooterForm from "./FooterForm";
import Cart from "./cart";
import {set} from "react-hook-form";

export default function OrderSubmit() {
  const {dispatch} = useContext(DrawerContext);
  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };

  const [modalOpened, setModalOpened] = React.useState(false);

  const modalHandler = () => {
    setModalOpened(modalOpened);
    hideCart();
  };


  return (
      <div
          className={`popup-submit ${
              !modalOpened && "popup-submit_opened"
          }`
          }
      >
        <div
            className={`popup__container`}
        >
          <h4 className="popup__title justify-center text-gray-900 mb-4">
            Ваша заявка отправлена!
          </h4>
          <p className="popup__paragraph text-center nrz-primary-2 mb-10">
            Менеджер свяжется с вами ближайшее рабочее время, чтобы уточнить детали
            заказа
          </p>

          <button
              className="w-32 border-2 border-blue-900 rounded-md py-3 px-8 mx-auto"
              onClick={modalHandler}
          >
            Закрыть
          </button>
        </div>
      </div>
  )
};

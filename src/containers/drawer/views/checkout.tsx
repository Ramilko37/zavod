import React, { useContext, useState } from 'react';
import NumberFormat from 'react-number-format';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import { Scrollbar } from 'components/scrollbar';
import ArrowLeft from 'assets/icons/arrow-left';
import Input from 'components/input';
import Button from 'components/button';
import { useCart } from 'contexts/cart/cart.provider';
import Textarea from 'components/textarea';
import OrderSubmit from './order-submit';
import {
  InputBase, InputBasePhone,
  TextBoxCommonBase,
  TextBoxEnable,
} from 'components/utils/theme';
const initialState = {
  phone_number: '',
  name: '',
  email: '',
  address: '',
  postal_code: '',
  suite: '',
};

export default function Checkout() {
  const { dispatch } = useContext(DrawerContext);
  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { items, calculatePrice, calculateTotalBox, calculateTotalQuantity, clearCart } = useCart();
  const [modalOpened, setModalOpened] = React.useState(false);


  const modalHandler = () => {
    setModalOpened(modalOpened);
    hideCart();
    clearCart();
  };

  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };

  const showCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: true,
      },
    });
  };


  const hideCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: false,
      },
    });
  };

  const submitOrder = async () => {
    const { name, email, address, postal_code, suite, phone_number } = formData;
    if (!phone_number.trim()) {
      setError({
        field: 'phone_number',
        message: 'Это не похоже на телефон',
        style: 'validation_failed'
      });
      return;
    }

    setLoading(true);

    const res = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: items,
        address: `${name} ${address} ${postal_code} ${suite}`,
        phone_number: phone_number,
        email: email,
        bill_amount: calculatePrice(),
      }),
    });
    if (res.status === 200) {
      setSuccess(true);
      setModalOpened(!modalOpened);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const onChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  if (success) {
    console.log('Это успех')

  }

  return (
<>
      <div className="flex flex-col w-full h-full checkout-container">
        <div className="w-full flex justify-center relative border-gray-200 mb-12">
          <button
              className="w-auto h-10 flex items-center justify-center text-gray-500 absolute left-0 duration-300 focus:outline-none hover:text-gray-900"
              onClick={hideCheckout}
              aria-label="close"
          >
            {/*<ArrowLeft/>*/}
            <span className='drawer-cart-close cursor-pointer hover:opacity-60'>Назад</span>
          </button>

          <h2 className="drawer-cart-title m-0">Ваша заявка</h2>
        </div>

        <Scrollbar className="checkout-scrollbar flex-grow">
          {/*<div className="flex flex-col px-30px pt-20px">*/}
          {/*  <div className="flex flex-col mb-45px">*/}
          {/*  <span className="flex font-semibold text-gray-900 text-18px mb-15px">*/}
          {/*    Контактная информация*/}
          {/*  </span>*/}
          {/*    <NumberFormat*/}
          {/*        format="+# (###) ###-####"*/}
          {/*        mask="_"*/}
          {/*        placeholder="Номер телефона"*/}
          {/*        className={`${InputBase} ${TextBoxCommonBase} ${TextBoxEnable}`}*/}
          {/*        value={formData.phone_number}*/}
          {/*        onValueChange={({ value }) =>*/}
          {/*            setFormData({*/}
          {/*              ...formData,*/}
          {/*              phone_number: value,*/}
          {/*            })*/}
          {/*        }*/}
          {/*    />*/}
          {/*    {error?.field === 'phone_number' && (*/}
          {/*        <p className="text-12px font-semibold text-error pt-10px pl-15px">*/}
          {/*          {error.message}*/}
          {/*        </p>*/}
          {/*    )}*/}
          {/*    <Input*/}
          {/*        placeholder="Email"*/}
          {/*        name="email"*/}
          {/*        value={formData.email}*/}
          {/*        onChange={onChange}*/}
          {/*        className="mt-15px"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="flex flex-col">*/}
          {/*  <span className="flex font-semibold text-gray-900 text-18px mb-15px">*/}
          {/*    Адрес доставки*/}
          {/*  </span>*/}
          {/*    <Input*/}
          {/*        placeholder="Имя"*/}
          {/*        className="mb-10px"*/}
          {/*        name="name"*/}
          {/*        value={formData.name}*/}
          {/*        onChange={onChange}*/}
          {/*    />*/}

          {/*    <Textarea*/}
          {/*        placeholder="Введите адрес"*/}
          {/*        className="mb-10px"*/}
          {/*        name="address"*/}
          {/*        value={formData.address}*/}
          {/*        onChange={onChange}*/}
          {/*    />*/}

          {/*    <div className="flex items-center mb-10px">*/}
          {/*      <Input*/}
          {/*          placeholder="Индекс"*/}
          {/*          style={{ width: 'calc(50% - 5px)', marginRight: '5px' }}*/}
          {/*          name="postal_code"*/}
          {/*          value={formData.postal_code}*/}
          {/*          onChange={onChange}*/}
          {/*      />*/}

          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}



          <div className="flex flex-col">


            <div className="mb-4 w-full">
            <span className="flex form-input-title mb-2">
              E-mail
            </span>
              <Input
                  placeholder=""
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className="w-full rounded border-2 border-blue-900 "
              />
            </div>


            <div className='flex flex-col md:flex-row'>
              <div className='flex-col mr-4 checkout-input'>
                                <span className="flex form-input-title mb-2">
                                 Имя <span className='text-red-500'>&nbsp;* </span>
                            </span>
                <Input
                    placeholder=""
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    className="mb-4 mr-4 w-64 rounded border-2 border-blue-900 xl: footer-input-name mr-4"
                />
              </div>

              <div className='flex-col checkout-input'>
                                <span className="flex form-input-title mb-2">
                                 Телефон<span className='text-red-500'>&nbsp;* </span>
                            </span>
                <NumberFormat
                    format="+# (###) ###-####"
                    mask="_"
                    placeholder=""
                    className={`${InputBasePhone} ${TextBoxCommonBase} ${TextBoxEnable} && rounded validation_failed`}
                    value={formData.phone_number}
                    onValueChange={({value}) =>
                        setFormData({
                          ...formData,
                          phone_number: value,
                        })
                    }
                />
                {error?.field === 'phone_number' && (


                    <p className="text-12px font-semibold text-error pt-10px pl-15px">
                      {error.message}
                    </p>

                )}
              </div>
            </div>




            <div className="flex flex-col pb-1">
            <span className="flex form-input-title">
              Комментарии
            </span>

              <Textarea
                  placeholder=""
                  className="h-28 border-2 border-blue-900 mt-10px rounded"
                  name="address"
                  value={formData.address}
                  onChange={onChange}
              />
            </div>
          </div>
          <p className='checkout-disclaimer'>
            После оформления заявки, наши менеджеры свяжутся вами, для  подтверждения
            заказа. В комментарии вы можете указать любые возникшие вопросы  –
            так мы быстрее сможем заключить договор и подготовить заказ к доставке.
          </p>
        </Scrollbar>


        <p className='checkout-legal'>Нажимая кнопку «Отправить заявку», вы соглашаетесь с политикой конфиденциальности и даете свое согласие на обработку персональных данных. Ваши данные не будут переданы третьим лицам.</p>



      </div>




  {/*total container*/}

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
        onClick={submitOrder}
    >
      Отправить заявку
    </Button>
  </div>



  <div
      className={`popup-submit ${
          modalOpened && "popup-submit_opened"
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


</>





);
}

import React, {forwardRef, useContext, useRef, useState} from 'react';
import NumberFormat from 'react-number-format';
import {DrawerContext} from 'contexts/drawer/drawer.provider';
import {Scrollbar} from 'components/scrollbar';
import ArrowLeft from 'assets/icons/arrow-left';
import Input from 'components/input';
import Button from 'components/button';
import {useCart} from 'contexts/cart/cart.provider';
import Textarea from 'components/textarea';

import {
    InputBase,
    InputBasePhone,
    TextBoxCommonBase,
    TextBoxEnable,
} from 'components/utils/theme';
import RadioButton from "../../../components/utils/radiobutton";


const UploadImg = <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M11.5508 4.45252C11.148 4.1144 10.6279 3.93663 10.0952 3.955C9.56249 3.97336 9.05676 4.1865 8.67973 4.55151L4.45161 8.64632C4.36605 8.73528 4.26287 8.80663 4.14823 8.85611C4.03358 8.9056 3.90983 8.93221 3.78434 8.93435C3.65885 8.93649 3.5342 8.91413 3.41783 8.8686C3.30145 8.82306 3.19574 8.75528 3.10699 8.66931C3.01824 8.58333 2.94828 8.48092 2.90127 8.36818C2.85427 8.25544 2.83118 8.13469 2.8334 8.01312C2.83561 7.89155 2.86308 7.77166 2.91416 7.6606C2.96524 7.54954 3.03889 7.44958 3.13071 7.36669L7.35759 3.27189C7.72896 2.90728 8.17164 2.61806 8.65975 2.42114C9.14785 2.22422 9.67159 2.12355 10.2003 2.12502C10.7291 2.12648 11.2522 2.23006 11.7391 2.42968C12.2261 2.62931 12.667 2.92098 13.0362 3.28764C13.4054 3.6543 13.6955 4.0886 13.8894 4.56512C14.0833 5.04165 14.1772 5.55085 14.1656 6.06295C14.154 6.57505 14.0371 7.07977 13.8218 7.54759C13.6065 8.01541 13.2971 8.43695 12.9116 8.78757L7.02612 14.2151C6.57119 14.6451 5.95858 14.8824 5.32305 14.8748C4.68751 14.8672 4.08112 14.6154 3.63727 14.1747C3.19341 13.734 2.94846 13.1405 2.95628 12.5248C2.96411 11.9091 3.22409 11.3217 3.67901 10.8917L8.96634 5.76837C9.0526 5.68193 9.15576 5.61301 9.26981 5.56561C9.38386 5.51821 9.50651 5.49329 9.6306 5.4923C9.7547 5.49131 9.87775 5.51428 9.99259 5.55986C10.1074 5.60543 10.2117 5.67271 10.2995 5.75776C10.3872 5.84281 10.4565 5.94393 10.5034 6.05522C10.5504 6.16651 10.574 6.28574 10.5728 6.40596C10.5717 6.52618 10.5459 6.64497 10.4968 6.75541C10.4478 6.86585 10.3765 6.96572 10.2872 7.0492L5.00365 12.1725C4.91121 12.2685 4.86047 12.3953 4.86197 12.5265C4.86346 12.6578 4.91707 12.7835 5.01168 12.8774C5.10628 12.9714 5.2346 13.0265 5.37001 13.0312C5.50541 13.036 5.63751 12.99 5.73887 12.9029L11.6231 7.47534C11.836 7.27906 12.0042 7.04184 12.1168 6.77889C12.2295 6.51594 12.2842 6.23307 12.2774 5.94844C12.2706 5.66381 12.2025 5.3837 12.0773 5.12608C11.9522 4.86847 11.7729 4.63904 11.5508 4.45252Z"
        fill="#1D3778"/>
</svg>;

const initialState = {
    phone_number: '',
    name: '',
    email: '',
    address: '',
    postal_code: '',
    suite: '',
};

const FooterForm = forwardRef((props: any, ref: null) => {
    const {dispatch} = useContext(DrawerContext);
    const [formData, setFormData] = useState(initialState);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);
    const {items, calculatePrice, clearCart} = useCart();


    const modalHandler = () => {
        setModalOpened(!modalOpened);
        console.log("123");
    };


    console.log(props);


    const submitOrder = async () => {
        const {name, email, address, postal_code, suite, phone_number} = formData;
        if (!phone_number.trim()) {
            setError({
                field: 'phone_number',
                message: 'Это не похоже на телефон',
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
            setFormData(initialState);
            // clearCart();
        } else {
            setError(true);
        }
        setLoading(false);

        modalHandler();

    };

    const onChange = (e) => {
        const {value, name} = e.currentTarget;
        setFormData({
            ...formData,
            [name]: value,
        });

    };



    const [partner, setPartner] = useState('Заказчик');


    const radioChangeHandler = (event) => {
        setPartner(event.target.value);
        console.log('clicked');
        console.log(partner);
    }
    return (

        <>


            <div id='footer-form'
                 className={props.classNames}>

                <div className={props.hidden === 'nothidden' ? ' ' : 'hidden'}>
                    <h2 className='partners-form__title'>Сотрудничество</h2>
                    <p className='partners-form__text'>Мы предоставляем выгодные условия сотрудничества для наших
                        дилеров и оптовых заказчиков. Оставьте свои контакты через форму, и наш менеджер свяжется с
                        вами.</p>
                    <div className='partners-form__wrapper'>
                        <RadioButton
                            changed={ radioChangeHandler }
                            id="1"
                            label="Заказчик"
                            isSelected={partner === 'Заказчик'}
                            value="Заказчик"
                        />
                        <RadioButton
                            changed={ radioChangeHandler }
                            id="2"
                            label="Дилер"
                            value="Дилер"
                            isSelected={partner === 'Дилер'}
                        />
                    </div>
                </div>


                <Scrollbar className="checkout-scrollbar flex-grow">

                    <div className="flex flex-col">


                        <div id='email' className="mb-4 w-full">
            <span className="flex form-input-title mb-2">
              E-mail
            </span>
                            <Input
                                placeholder=""
                                name="email"
                                value={formData.email}
                                onChange={onChange}
                                className="mb-4 w-full rounded-lg border-2 border-blue-900 "
                            />
                        </div>

                        <div id='name&phone' className='flex flex-col md:flex-row justify-between'>
                            <div className='flex-col'>
                                <span className="flex form-input-title mb-2">
                                 Имя <span className='text-red-500'>&nbsp;* </span>
                            </span>
                                <Input
                                    placeholder=""
                                    name="name"
                                    value={formData.name}
                                    onChange={onChange}
                                    className="mb-4 mr-4 w-52 rounded-lg border-2 border-blue-900 xl: footer-input-name"
                                />
                            </div>

                            <div className='flex-col'>
                                <span className="flex form-input-title mb-2">
                                 Телефон<span className='text-red-500'>&nbsp;* </span>
                            </span>
                                <NumberFormat
                                    format="+# (###) ###-####"
                                    mask="_"
                                    placeholder=""
                                    className={`${InputBasePhone} ${TextBoxCommonBase} ${TextBoxEnable}`}
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
                                className="h-28 border-2 border-blue-900 mt-10px"
                                name="address"
                                value={formData.address}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </Scrollbar>

                <button>
                    <div className='flex flex-row border-2 border-blue-900 w-48 h-9 rounded mt-6 mb-12'>
                        <div className='mr-1 w-7 pt-2 pl-2'>{UploadImg}</div>
                        <p className='border-l-3px border-blue-900 h-full content-center pt-1 pl-2'>
                        <span className='footer-file-btn'>
                        Прикрепить файл...
                        </span>
                        </p>
                    </div>
                </button>


                <div className="flex flex-col">
                    <Button className="big w-full h-14 bg-blue-900" onClick={submitOrder} loading={loading}>
                        Отправить заявку
                    </Button>

                    <p className='form-disclaimer mt-6'>Нажимая кнопку «Отправить заявку», вы соглашаетесь с
                        политикой конфиденциальности и даете свое согласие
                        на обработку персональных данных. Ваши данные не будут переданы третьим лицам.</p>
                </div>
            </div>

            <div
                className={`popup ${
                    !modalOpened && "popup_opened"
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
});


export default FooterForm;

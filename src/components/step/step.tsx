import React from "react";
import styles from './styles.module.css';
import StepOne from "../../assets/svg-images/stepOne";
import StepTwo from "../../assets/svg-images/stepTwo";
import StepFour from "../../assets/svg-images/stepFour";
import StepThree from "../../assets/svg-images/stepThree";
import StepFive from "../../assets/svg-images/stepFive";
import StepSix from "../../assets/svg-images/stepSix";
import StepSeven from "../../assets/svg-images/stepSeven";
import BgFrameSecond from "../../assets/svg-images/bg_frame_02";



const stepArray = [
    {
        name: 'One',
        image: <StepOne/>,
        text: 'Сформируйте заявку на сайте или сразу свяжитесь с менеджером для консультации',
        button: <a href='/catalog' className={styles.button}>Перейти в каталог</a>
    },
    {
        name: 'Two',
        image: <StepTwo/>,
        text: 'Наш менеджер поможет вам собрать заказ, расскажет про детали документооборота, доставки и оплаты',

    },
    {
        name: 'Three',
        image: <StepThree/>,
        text: 'Мы выставляем вам счет, подписываем договор',
        button: <a href='/about' className={styles.button}>Наши реквизиты</a>
    },
    {
        name: 'Four',
        image: <StepFour/>,
        text: 'Наш менеджер обсудит с вами сроки отгрузки\n' +
            'и согласует отправку партии',
    },
    {
        name: 'Five',
        image: <StepFive/>,
        text: 'Мы можем отправить груз сами за ваш счет\n' +
            'или принять вашу транспортную компанию',
    },
    {
        name: 'Six',
        image: <StepSix/>,
        text: 'В зависимости от договора, вы оплачиваете товар \n' +
            'по предоплате (до отправления груза) или постоплате (после получения груза)',
    },
    {
        name: 'Seven',
        image: <StepSeven/>,
        text: 'Ваш заказ прибывает к вам на склад. Для нас потребуется еще пара документов о приеме товара',
    },
];

const Step = () => {
    return (
        <div>
            {stepArray.map(stepArray =>

                <div className={styles.columnWrapper}>
                    <div key={stepArray.name} className={styles.container}>
                        <div className={styles.imageWrapper}>
                            {stepArray.image}
                        </div>
                        <p className={styles.text}>{stepArray.text}</p>
                        {stepArray.button}
                    </div>
                    <div className={styles.flexWrapper}>
                        <BgFrameSecond />
                    </div>
                </div>

            )}
        </div>
    );
}

export default Step;

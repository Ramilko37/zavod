import React from "react";
import styles from './styles.module.css';
import Layout from "../layout/layout";
import FooterForm from "../drawer/views/FooterForm";
import {defaultConfig} from "next/dist/next-server/server/config-shared";
import StepOne from "../../assets/svg-images/stepOne";
import Step from "../../components/step/step";
import BgFrameFirst from "../../assets/svg-images/bg-frame_01";



const HowToOrderContent = () => {

    // let defaultStyles = 'flex-col w-520px bg-white rounded-md mx-auto px-30px pt-20px pb-16 mt-40 box-shadow';


    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.container}>
                    <h1>Как сделать заказ</h1>
                    <p className={styles.paragraph}>
                        Текст о том какие мы хорошие и самые лучшие в своем деле, а все конкуренты нам завидуют.
                        Краткая история компании, чего мы добились, когда были основаны, какими мы видим себя через 5 лет
                    </p>
                    <div className={styles.flexWrapper}>
                        <BgFrameFirst />
                    </div>
                <Step />
                </div>
            </div>
        </>
    );


}

export default HowToOrderContent;

import React from "react";
import styles from './styles.module.css';
import Layout from "../layout/layout";
import FooterForm from "../drawer/views/FooterForm";
import {defaultConfig} from "next/dist/next-server/server/config-shared";



const PartnershipPageContent = () => {

    // let defaultStyles = 'flex-col w-520px bg-white rounded-md mx-auto px-30px pt-20px pb-16 mt-40 box-shadow';


    return (
        <>
            <div className="w-full m-auto">
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <FooterForm
                            hidden='nothidden'

                           classNames='px-30px pt-20px w-520px'
                        />
                    </div>
                    <div className={styles.container__image}>

                    </div>



                </div>
            </div>
        </>
        );


}

export default PartnershipPageContent;

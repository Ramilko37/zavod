import React from "react";
import FooterForm from "./drawer/views/FooterForm";
import application_img from "../assets/image/price_icon.png";
import OrderSubmit from "./drawer/views/order-submit";




const ApplicationContainer = () => {





    return (
        <div id='application-container' className="w-full h-auto flex items-center justify-between justify-between pt-40">

            <div className='flex flex-col lg:flex-row h-auto container'>
                <div className='flex flex-col lg:mt-40 lg:ml-40 lg:mr-40 mt-0 mr-0 text-center lg:text-left mb-8 text-white footer-text-block'>
                    <h3 className='text-black md:text-white whitespace-pre-line footer-title xl:mt-20 xl:ml-10 mx-auto xl:m-0'>Cформируйте <br/>
                        заявку</h3>
                    <p className='text-black md:text-white whitespace-pre-wrap mt-4 xl:ml-10 footer-text mx-auto '>Заполните фоорму обратной связи, укажите
                        в комментарии что вы хотите заказать. Так же
                        через эту форму вы можете направить нам
                        коммерческое предложение.</p>
                </div>

                   <FooterForm
                    classNames='flex-col w-520px bg-white rounded-md mx-auto px-30px pt-20px pb-16 mt-40 box-shadow'
                   />


            </div>

        </div>

    );
};

export default ApplicationContainer;











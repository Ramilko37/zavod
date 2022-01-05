import React from "react";
import  ourProductionImg  from "../assets/image/our-production-img.png"

const OurProduction = () => {
  return (
    <div className="our-production flex items-baseline justify-start">
      <div className="our-production__text-wrapper w-1/3">
        <h2 className="our-production__title nrz-h2 mb-6">Производство</h2>
        <p className="our-production__description nrz-primary-2 mb-4">
          Наше производство является крупнейшим производителем одноразовых
          респираторов за Уралом. Мы снабжаем средствами защиты наших шахтеров,
          химиков, строителей и других людей, которые работают в опасных
          условиях. Ежегодно мы выпускаем десятки миллионов средств
          индивидуальной защиты.
        </p>
        <a href="#" className="our-production__link nrz-primary-2 underline">Подробнее</a>
      </div>
      {/* <div className="our-production__image-wrapper">
      <img src={ourProductionImg} alt="Наше производство" />
      </div> */}
    </div>
  );
};

export default OurProduction;

import React, { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const datatext = {
  text1: "Клапан облегчает дыхание и отводит влагу",
  text2: "Широкие резинки не давят на голову",
  text3: "Двойная фильтрация:\n" + "механическая и электростатическая",
};

import HeroImage from "../assets/image/hero-image.png";
import { ReactComponent as CircleBtn } from "../assets/image/shield_in_circle.svg";

const OrderButton = () => {
  return (
    <a className="hero-button text-center pt-4 nrz-primary-1-white">
      Оформить заявку
    </a>
  );
};
export default function HeroBlock() {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const Toggle1 = () => setVisible1(!visible1);
  const Toggle2 = () => setVisible2(!visible2);
  const Toggle3 = () => setVisible3(!visible3);

  // const HeroButtonHandler = () => myRef.current.scrollIntoView();

  return (
    <div className="hero">
      <div className="hero-wrapper w-full flex flex-row bg-white relative">
        <div className="hero-image-container">
          <img src={HeroImage} className="hero-image" alt="hero-image" />
          <div className="absolute hero-marker hero-marker-left">
            <CircleBtn />
          </div>
          <div className="absolute hero-marker hero-marker-middle">
            <CircleBtn />
          </div>
          <div className="absolute hero-marker hero-marker-right">
            <CircleBtn />
          </div>
        </div>
        <div className="hero-content flex flex-col">
          <h2 className="hero-title hero-block-title">
            Герои тоже носят маски
          </h2>
          <p className="hero-text">
            Мы производим и продаем респираторы, полумаски, противогазы и других
            средства индивидуальной защиты. Любой класс защиты даже для самых
            опасных типов работ.
          </p>
          <Link
            className="hero-button nrz-primary-1-white align-middle hero-block-button cursor-pointer"
            to="application-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            <a>Оформить заявку</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

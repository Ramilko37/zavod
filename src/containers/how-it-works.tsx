import React from "react";
import FeatureBlock from "components/feature-block";
import DeliveryIcon from "assets/icons/delivery";
import ClaimIcon from "assets/icons/claim";
import ContractIcon from "assets/icons/contract";

const data = [
  {
    id: 1,
    background: "#feeec8",
    titleFirstLine: 'Заявка',
    titleLastLine: 'и оформление',
    description: "Сформируйте заказ через сайт или напишите нам на почту.",
    image: ClaimIcon,
  },
  {
    id: 2,
    background: "#ceeffe",
    titleFirstLine: "Заключение",
    titleLastLine: "договора",
    description:
      "Наш менеджер свяжется с вами для уточнения деталей поставки и сформирует договор.",
    image: ContractIcon,
  },
  {
    id: 3,
    background: "#d4f8c4",
    titleFirstLine: "Доставка",
    titleLastLine: "и получение",
    description:
      "Работаем с популярными транспортными компаниями: ПЭК, Деловые Линии, Энергия.",
    image: DeliveryIcon,
  },
];

export default function HowItWorks() {
  return (
    <div className="flex w-full flex-wrap">
      <div className="feature-block-lead flex-col justify-center mr-4">
        <h3 className="nrz-h2 mb-4">Мы ценим ваше время</h3>
        <p>
          Связаться с нами вы можете по телефону +7 (383) 249 27-57 или по
          электронной почте sales@nrz.su
        </p>
      </div>
      <div className="feature-block-wrapper">
        {data.map((item) => (
          <FeatureBlock
            key={item.id}
            titleFirstLine={item.titleFirstLine}
            titleLastLine={item.titleLastLine}
            description={item.description}
            className="feature-block"
            Image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

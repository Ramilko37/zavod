import React from 'react';
import {
    ItemCardBase,
    ItemCardContent,
    ItemCardName,
    ItemCardInformation,
    ItemCardType,
    ItemCardCounterWrapper, ItemCardCheckoutButton
} from './utils/theme';
import CounterAlt from './animated-counter';
import Image from 'next/image';

interface ItemProps {
    image: string;
    name: string;
    price: number;
    type: string;
    quantity: number;
    spec: string;
    boxCapacity: number;
}

interface ItemCardProps {
    item: ItemProps;
    value: number;
    onDecrement?: (e: any) => void;
    onIncrement?: (e: any) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
                                               item,
                                               onDecrement,
                                               onIncrement,
                                               value,
                                           }) => {
    const baseClassName = ItemCardBase + ' ' + (value ? 'product-shadow-card' : '');

    return (
        <div className={baseClassName}>
            <Image
                className="object-cover"
                src={item?.image}
                alt={' Alt ' + item?.name}
                width={240}
                height={168}
            />
            <div className={ItemCardContent}>
                <span className="product-header">{item.name}</span>
                <div className={ItemCardInformation}>
                    <span className="product-description">{item.type}</span>
                    <span className="product-description">{item.spec}</span>
                    <span className="product-description">{item.boxCapacity} шт. / коробка</span>
                </div>

                {
                    !value ?
                        <button className="product-button"
                                onClick={() => {
                                    onIncrement(1);
                                }}>
                            В заявку
                        </button>
                        :
                        <div className="product-button-selected">
                            <CounterAlt
                                widthClass="w-full"
                                value={value}
                                boxCapacity={item.boxCapacity}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                            />
                        </div>
                }
            </div>
        </div>
    );
};

export default ItemCard;

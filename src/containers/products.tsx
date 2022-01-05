import React, {useContext} from 'react';
import ItemCard from 'components/item-card';
import {useSearch} from 'contexts/search/use-search';
import {useSearchable} from 'helpers/use-searchable';
import {useCategory} from 'contexts/category/use-category';
import {useCart} from "../contexts/cart/cart.provider";

const Products = React.forwardRef(
    ({items}: any, ref: React.RefObject<HTMLDivElement>) => {

        const {searchTerm} = useSearch();
        const {category} = useCategory();
        const searchableItems = useSearchable(
            items,
            category,
            searchTerm,
            (item) => [item.name]
        );

        const { addItem, removeItem, getItem } = useCart();

        return (
            <div className="w-full  mx-auto py-10 xl: products-container" 
            // ref={ref} id="myScrollToElement"
            >
                {searchableItems.length ? (
                    <div
                        className="grid grid-cols-1 gap-x-3 gap-y-3 mt-9 md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-4 xxl:grid-cols-4 xxl:gap-x-4 xxl:gap-y-4 2xxl:grid-cols-4 large:grid-cols-5">
                        {searchableItems.map((item) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                value={getItem(item.id)?.quantity}
                                onIncrement={() => addItem(item)}
                                onDecrement={() => removeItem(item)}
                            />
                        ))}
                    </div>
                ) : null

                }
            </div>
        );
    }
);

export default Products;

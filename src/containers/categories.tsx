import CategoryCard from 'components/category-card';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';

import 'swiper/swiper-bundle.min.css';
import {
    ArrowButtonBase,
    ButtonGroupBase,
    NextButtonRadius,
    PrevButtonRadius,
} from 'components/utils/theme';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';

interface Props {
    data: any;
}

SwiperCore.use([Navigation]);
const breakpoints = {
  600: {
    slidesPerView: 1,
    slidesPerGroup: 1
  },
  768: {
    slidesPerView: 2,
    slidesPerGroup: 2
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3
  },
  1200: {
    slidesPerView: 3,
    slidesPerGroup: 3
  },
  1400: {
    slidesPerView: 4,
    slidesPerGroup: 4
  },
  1900: {
    slidesPerView: 4,
    slidesPerGroup: 4
  },
};
const Categories = React.forwardRef(
  ({ data }: Props, ref: React.RefObject<HTMLDivElement>) => {
    return (
      <div>
        <div className="category category-cards pt-32 relative" ref={ref}>
        <div className={ButtonGroupBase + ' ' + 'z-10'}>
        <button
          aria-label="prev-button"
          className={
            ArrowButtonBase +
            ' ' +
            PrevButtonRadius +
            ' ' +
            'swiper-previous-button'
          }
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="next-button"
          className={
            ArrowButtonBase +
            ' ' +
            NextButtonRadius +
            ' ' +
            'swiper-next-button'
          }
        >
          <ChevronRight />
        </button>
            </div>
          <Swiper
            // scrollbar={{ draggable: false }}
            // touchRatio={0}
            // loop={true}
            // draggable={false}
            // scrollbar={{ draggable: false }} //это уберет прокрутку мышью, но нужно скрывать горизонтальны скролл swiper
            // slidesPerView={4}
            // slidesPerGroup={4}
            allowTouchMove={false}
            preventInteractionOnTransition={true}
            spaceBetween={10}
            navigation={{
              prevEl: '.swiper-previous-button',
              nextEl: '.swiper-next-button',
            }}
            breakpoints={breakpoints}
          >
            {data?.map((current) => (
              <SwiperSlide key={current.id}>
                <CategoryCard
                  id={current.id}
                  imageUrl={current.image_icon_url}
                  name={current.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
);

export default Categories;

// Add all of your components design and variations here

// -------
// Button
// -------
export const ButtonBase =
  'flex items-center justify-center flex-shrink-0 font-normal rounded bg-blue-900 text-white outline-none transition duration-250 ease-in-out focus:outline-none';
export const ButtonVariant = {
  // primary: 'text-white bg-blue-900 hover:bg-primary-hover',
  // // primary: 'text-white bg-blue-900 hover:bg-gray-900',
  secondary: 'text-white bg-gray-600',
  elevation: 'text-white bg-blue-900 shadow-upside',
};
export const ButtonDisable =
  'text-white bg-blue-900 cursor-not-allowed hover:bg-blue-400';
export const ButtonSize = {
  big: 'h-12 px-30px',
  normal: 'h-11 px-30px',
  small: 'h-9 text-13px px-20px',
};

// ------------
// Icon Button
// ------------
export const IconBtnBase =
  'flex items-center justify-center transition-colors duration-250 ease-in-out';

// ------------
// Button
// ------------
export const BtnBase =
  'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';

// --------
// Counter
// --------
export const CounterBase =
  'group flex items-center justify-between flex-shrink-0 rounded overflow-hidden shadow-floatingUp';

export const CounterValue =
  'font-semibold text-13px text-gray flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default';

export const CounterSize = {
  big: 'h-12',
  normal: 'h-45px',
};

// -----------------
// Input & Textarea
// -----------------
export const TextBoxCommonBase =
  'w-full h-12 px-4 placeholder-gray-600 border-2 rounded transition duration-200';

export const TextBoxDisable =
  'bg-gray-300 cursor-not-allowed border-gray-400 focus:border-blue-900 focus:placeholder-gray-500';

export const TextBoxEnable =
  'focus:border-blue-900 focus:placeholder-gray-400 border-blue-900';

export const InputBase = 'h-8 md:h-10 lg:h-12 px-4 w-full border-2 border-blue-900';

export const InputBasePhone = 'h-8 md:h-10 lg:h-12 px-4 border-2 border-blue-900 bg-white';

export const TextareaBase = 'h-120px p-4 resize-none';

// ----------
// Cart Item
// ----------
export const CartItemBase =
  'cart-item h-auto flex items-center bg-white py-6 border-b-2 border-gray-200 relative last:border-b-0' +
    'cart-item-medium'
;

export const CartItemImage =
  'flex w-105px h-105px rounded overflow-hidden mr-15px flex-shrink-0';

export const CartItemContent = 'flex-1';

export const CartItemName = 'text-13px text-gray-900 flex-initial';

export const CartItemSinglePrice = 'text-13px text-gray-500 mt-5px mb-10px';

export const CartItemTotalWrapper = 'w-8/12 flex justify-start items-start';

export const CartItemTotalPrice =
  'font-semibold text-16px text-gray-900 flex-shrink-0';

// --------
// Feature
// --------
export const FeatureBase = 'feature-block flex w-full items-start flex-row';
export const FeatureCounter =
  'flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold';

export const FeatureContent = 'flex flex-col items-start';

export const FeatureTitle =
  'w-full text-4xl font-semibold text-gray-900 mt-5 mb-2';

export const FeatureDetails = 'w-full leading-6 text-14px';

// ---------------
// Call To Action
// ---------------
export const CTABase =
  'w-full flex flex-col items-start px-30px py-45px bg-cover bg-center bg-no-repeat bg-gray-100 border border-gray-300 rounded overflow-hidden relative xxl:py-60px xxl:px-80px'

export const CTAContent =
  'flex flex-col items-center lg:items-start relative z-10 w-full lg:max-w-half';

// ----------
// Item Card .... Height uthay dite hobe image theke
// ----------
// export const ItemCardBase = 'w-full flex flex-col items-start cursor-pointer';
// export const ItemCardImage =
//   'flex justify-center items-center w-full rounded overflow-hidden';
// export const ItemCardContent = 'flex flex-col items-start mt-3';
// export const ItemCardPrice = 'font-semibold text-gray-900 mb-2 text-16px';

export const ItemCardBase =
    "w-full flex flex-col items-center border border-gray-300 rounded p-4 bg-white transition duration-350 ease-in-out";

// export const ItemCardBaseContent = "flex flex-row items-start";
//
// export const ItemCardImage =
//     "flex justify-center items-center w-5/12 xxl:w-4/12 h-auto rounded overflow-hidden bg-gray-200 flex-shrink-0 mr-4";

export const ItemCardContent =
    "flex flex-col w-full items-start overflow-hidden";

export const ItemCardPrice = "font-semibold text-gray-900 mb-1 text-16px";

export const ItemCardName = "text-24px text-gray-700 truncate mt-10 w-full";

export const ItemCardInformation =
    "flex flex-col items-start w-full";

export const ItemCardType = "text-gray-900 text-13px";

export const ItemCardRoundedDot =
    "flex bg-gray-500 w-3px h-3px rounded mx-3 flex-shrink-0";

export const ItemCardQuantity = "text-gray-500 text-11px truncate";

export const ItemCardDetailsButton =
    "text-gray-500 text-16px font-semebold text-gray-900 my-4 focus:outline-none";

export const ItemCardCounterWrapper =
    "ml-auto w-full flex justify-end items-end";

export const ItemCardCheckoutButton =
    " w-full bg-transparent hover:bg-blue-200 custom-blue py-2 px-2 border rounded";

export const ItemCardCheckoutButtonPressed =
    " w-full bg-indigo-900 text-white  py-2 px-4 border border-blue-800 rounded";

// ----------
// SearchBox
// ----------
export const SearchBase =
  'flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden';

export const SearchIconWrapper =
  'absolute top-0 left-0 flex items-center justify-center h-full w-50px';

export const SearchInput =
  'w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7 border-2 border-blue-900 rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900';

// --------------
// Section Title
// --------------
export const SectionTitleBase = 'flex flex-col items-center';

export const SectionTitleHeading =
  'flex justify-center text-21px font-semibold text-center mb-2 text-gray-900 xxl:text-24px xxl:mb-10px';

export const SectionTitleSubTitle =
  'flex justify-center text-left xxl:text-center';

// -----------------------
// Section Title with Bar
// -----------------------
export const SectionTitleBarBase = 'flex flex-col items-start relative pl-8';

export const SectionTitleBar =
  'flex w-5px h-full bg-primary absolute top-0 left-0';

export const SectionTitleBarHeading =
  'flex justify-start text-21px font-semibold text-left mb-2 text-gray-900 xxl:text-24px xxl:font-semibold xxl:mb-3';

export const SectionTitleBarSubTitle = 'flex justify-start text-left';

// ---------
// Carousel
// ---------
export const ButtonGroupBase = 'flex items-center absolute top-half w-full';

export const ArrowButtonBase =
'w-4 h-4 flex items-center justify-center text-gray-00 bg-transparent absolute translate-y-14 transition duration-250 hover:opacity-40 focus:outline-none';


// export const PrevButtonRadius = 'left-0 ml-35px ';
export const PrevButtonRadius = '-left-14';

// export const NextButtonRadius = 'right-0 mr-35px';
export const NextButtonRadius = '-right-14';

export const ActiveDotsBase = 'w-6 bg-primary';

export const CarouselItemBase =
  'overflow-hidden w-full flex rounded overflow-hidden';

export const CarouselItemImage = 'w-full h-full object-cover';

// -----------------
// Animated Counter
// -----------------
export const AnimatedCounterBaseWrapper =
    "relative h-full flex-shrink-0 rounded";

export const AnimatedCounterBase =
    "group flex items-center justify-between h-full rounded absolute top-0  bg-transparent w-full";

export const AnimatedCounterValue =
    "text-14px text-blue flex items-center justify-center h-full w-full transition-colors duration-250 ease-in-out cursor-default";

// ------------
// Testimonial
// ------------
export const TestimonialPrevButtonRadius = 'left-0 ml-10px lg:ml-35px';

export const TestimonialNextButtonRadius = 'right-0 mr-10px lg:mr-35px';

export const TestimonialBase =
  'w-full bg-white flex flex-col rounded border border-gray-300 p-40px lg:p-50px pt-30px';

export const QuoteBase = 'text-gray-200 flex justify-center mb-30px';

export const TestimonialReview =
  'text-16px text-gray-700 font-normal text-center mb-30px leading-7';

export const TestimonialReviewerBase = 'flex items-center justify-center';

export const TestimonialItemImageBase =
  'overflow-hidden w-40px h-40px mr-15px bg-gray-100 flex rounded-full overflow-hidden shadow-floatingUp';

export const ReviewerName = 'text-16px text-gray-900 font-semibold text-center';

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import PhoneIcon from "assets/icons/phone";
import CartIcon from "assets/icons/cart-icon";
import Logo from "assets/image/logo.png";
import HeaderLogo from "assets/icons/header-logo";
import Search from "components/search";
import { DrawerContext } from "contexts/drawer/drawer.provider";
import { useCart } from "contexts/cart/cart.provider";
import { useRouter } from "next/router";
import { Scrollbar } from "components/scrollbar";
import ActiveLink from "components/active-link";
import HeaderNav from "components/header-nav";

export default function Header() {
  const router = useRouter();
  const { dispatch }: any = useContext(DrawerContext);
  const { itemsCount } = useCart();
  const { cartState } = useCart();

  const showMenu = () => {
    dispatch({
      type: "OPEN_MENU",
      payload: {
        menu: true,
      },
    });
  };

  const showCart = () => {
    dispatch({
      type: "SLIDE_CART",
      payload: {
        open: true,
      },
    });
    dispatch({
      type: "TOGGLE_CART_VIEW",
      payload: {
        showCart: true,
      },
    });
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const isHome = router.pathname === "/";

  return (
    <header
      className={`header flex items-center text-gray-700 body-font bg-white w-full z-20
    ${offset > 300 && "header-hidden"} ${offset > 500 && "header-fixed"}`}
    >
      <div className="header-wrapper">
        <Link href="/">
          <a className="lg:flex space-x-1">
            <span className="sr-only">Новосибирский респираторный завод</span>
            <HeaderLogo className={"logo"} />
          </a>
        </Link>
        <HeaderNav />
        <div className="header-right">
          <div className="header-contacts text-gray-900 flex-shrink-0 lg:flex flex-col items-start">
            <span className="tel-link text-16px nrz-primary-2-blue flex flex-col">
              <a className="font-bold" href="tel:+79991234567">
                +7 999 123 45 67
              </a>
            </span>
            <span className="email-link text-16px nrz-primary-2-blue flex flex-col">
              <a className="nrz-primary-2" href="mailto:sales@nrz.su">
                sales@nrz.su
              </a>
            </span>
          </div>
          <button
            className="cart-button flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
            onClick={showCart}
            aria-label="cart-button"
          >
            <CartIcon />
            <span
              className={`cart-marker absolute rounded-full top-0 right-0 ${
                !cartState && "hidden"
              }`}
            >
              {/* {itemsCount} */}
            </span>
          </button>
          <button
            aria-label="Menu"
            className="menuBtn flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px"
            onClick={showMenu}
          >
            <span className="menuIcon">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

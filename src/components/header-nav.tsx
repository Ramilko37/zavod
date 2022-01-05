import React from "react";
import ActiveLink from "./active-link";

export default function HeaderNav() {

  const menus = [
    {
      id: 1,
      pathname: 'http://localhost:3000/#',
      title: 'Каталог',
    },
    {
      id: 2,
      pathname: '/about/certificates',
      title: 'О нас',
    },
    {
      id: 3,
      pathname: '/how-to-order',
      title: 'Как заказать',
    },
    {
      id: 4,
      pathname: '/partnership',
      title: 'Сотрудничество',
    },
    {
      id: 5,
      pathname: 'http://localhost:3000/#',
      title: 'Контакты',
    },
  ];

  return(
    <nav className="flex-grow header-navigation">
              {menus.map((menu, index) => (
                <ActiveLink
                  href={menu.pathname}
                  activeClassName="active active-nav-link"
                  key={index}
                >
                  <a
                    className="menu-item relative nrz-primary-2 transition duration-300 ease-in-out last:mr-0 header-link"
                  >
                    {menu.title}
                  </a>
                </ActiveLink>
              ))}
    </nav>
  )
}

import {
  Facebook,
  Twitter,
  Youtube,
  Github,
  Instagram,
  Linkedin,
} from 'assets/icons/social-icons';
import {footer_logo} from "../../components/utils/images";
import {ReactComponent as VkLogo} from "../../assets/image/vk.svg";
import ApplicationContainer from "../application-container";
import NrzLogo from "../../assets/svg-images/nrz-logo";



const social = [
  {
    id: 3,
    link: '/',
    icon: <VkLogo />,
    className: 'vkontakte',
    title: 'vkontakte',
  },
  {
    id: 1,
    link: '/',
    icon: <Instagram />,
    className: 'instagram',
    title: 'instagram'
  },
  {
    id: 2,
    link: '/',
    icon: <Facebook />,
    className: 'facebook',
    title: 'facebook',
  },

  {
    id: 3,
    link: '/',
    icon: <Twitter />,
    className: 'twitter',
    title: 'twitter',
  },

];

const Footer = () => (
    <div className='footer-bg'>

      <ApplicationContainer />
      <footer id='footer' className="w-full flex flex-col items-center pb-14 pt-40">

        {/*mobile*/}

        <div id='tablet-footer' className='xl:hidden flex flex-row mb-24 footer-section'>
          <div  id='Menu' className='flex-col justify-between footer-menu-container'>
            <h4 className='footer-title'>Меню</h4>
            <ul>
              <li className='my-6 footer-link'>Каталог</li>
              <li className='mb-6 footer-link'>Как заказать</li>
              <li className='mb-6 footer-link'>Сотрудничество</li>
              <li className='mb-6 footer-link'>Контакты</li>
              <li className='opacity-60 footer-link'>Политика конфиденциальности</li>
            </ul>
          </div>

          <div  id='About' className='flex-col w-60 lg:ml-28 justify-between'>
            <h4 className='footer-title'>О нас</h4>
            <ul>
              <li className='my-6 footer-link'>О компании</li>
              <li className='mb-6 footer-link'>Сертификаты</li>
              <li className='mb-6 footer-link'>Реквизиты</li>
              <li className='opacity-60 footer-link'>Производство</li>
            </ul>
          </div>

          <div className='flex-col text-right'>
            <h4 className='footer-title mb-6 whitespace-nowrap'>Обратный звонок</h4>
            <span className='footer-phone'>+7 999 123 45 67</span>


            <div className="items-center mt-4 flex justify-end">
              {social.map((item, index) => (
                  <a
                      href={item.link}
                      className={`social ${item.className}`}
                      key={index}
                      target="_blank"
                  >
                    <span className="sr-only">{item.title}</span>
                    {item.icon}
                  </a>
              ))}
            </div>
          </div>
        </div>


        <div id='desktop-footer' className='footer-desktop flex-col'>
          <div className='flex w-full grid grid-cols-2 lg:grid-cols-4 text-white container h-320px px-20px lg:px-0'>

            <div className='flex flex-row w-80'>
              {/*<div className='footer-img'></div>*/}
              <NrzLogo/>
              <p className='w-32 order-1 lg:order-2 ml-15px mr-90px font-bold'>Новосибирский
                Респираторный
                Завод</p>
            </div>

            <div  id='Menu' className='flex-col justify-between lg:ml-20 mr-11'>
              <h4 className='footer-title'>Меню</h4>
              <ul>
                <li className='my-6 footer-link'>Каталог</li>
                <li className='mb-6 footer-link'>Как заказать</li>
                <li className='mb-6 footer-link'>Сотрудничество</li>
                <li className='mb-6 footer-link'>Контакты</li>
                <li className='footer-link'>Политика конфиденциальности</li>
              </ul>
            </div>

            <div  id='About' className='flex-col w-60 lg:ml-28 justify-between mr-60'>
              <h4 className='footer-title'>О нас</h4>
              <ul>
                <li className='my-6 footer-link'>О компании</li>
                <li className='mb-6 footer-link'>Сертификаты</li>
                <li className='mb-6 footer-link'>Реквизиты</li>
                <li className='footer-link'>Производство</li>
              </ul>
            </div>

            <div className='hidden lg:flex flex-col ml-20 w-240px text-right'>
              <h4 className='footer-title mb-6'>Обратный звонок</h4>
              <span className='footer-phone'>+7 999 123 45 67</span>


              <div className="items-center mt-4 flex justify-end">
                {social.map((item, index) => (
                    <a
                        href={item.link}
                        className={`social ${item.className}`}
                        key={index}
                        target="_blank"
                    >
                      <span className="sr-only">{item.title}</span>
                      {item.icon}
                    </a>
                ))}
              </div>
            </div>
          </div>



          <span className='hidden lg:flex justify-center text-white opacity-60 mt-20'>ООО «Новосибирский Респираторный Завод» 2008 – 2021 </span>
        </div>


      </footer>

    </div>









);

export default Footer;

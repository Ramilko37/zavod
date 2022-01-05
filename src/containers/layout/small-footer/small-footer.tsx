import {
    Facebook,
    Twitter,
    Youtube,
    Github,
    Instagram,
    Linkedin,
} from 'assets/icons/social-icons';
import FooterLogo from "../../../assets/image/zavod-logo.png";
import {ReactComponent as VkLogo} from "../../../assets/image/vk.svg";
import {ReactComponent as LogoFooter} from "../../../assets/image/nrz_shield.svg";
import ApplicationContainer from "../../application-container";
import styles from './styles.module.css';
import Footer from "../footer";
import NrzLogo from "../../../assets/svg-images/nrz-logo";



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

const SmallFooter = () => (


        <footer id='footer' className={styles.footer}>
                <div id='footer-wrapper'  className={styles.footer__container}>

                    <div className={styles.footer__logoWrapper}>
                        {/*<img className={styles.footer__logoImg} src={FooterLogo} alt=""/>*/}
                        <NrzLogo />
                        <p className={styles.footer__logoText}>Новосибирский
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



                <span className={styles.footer__description}>ООО «Новосибирский Респираторный Завод» 2008 – 2021 </span>


        </footer>














);

export default SmallFooter;

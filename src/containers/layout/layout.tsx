import  React from "react";
import Header from './header';
import Footer from './footer';
import { Drawer, CartDrawer } from 'containers/drawer/drawer';
import SmallFooter from "./small-footer/small-footer";



const Layout = (props) => {
    const [isModalOpened, setIsModalOpened] = React.useState(false);
    const [bigFooter, setIsBigFooter] = React.useState(true);




    return(
        <main
            className="relative min-h-screen flex-grow"
            style={{
                minHeight: '-webkit-fill-available',
                WebkitOverflowScrolling: 'touch',
                ...props.style,
            }}
        >
            <Drawer />
            <Header />
            <div className="flex flex-col h-full min-h-screen flex-grow">
                <div className="flex-auto main-container-padding">
                    {props.children}
                </div>

                {props.footer === 'small' ? <SmallFooter /> : <Footer />}

            </div>
            <CartDrawer />

        </main>
    );
}


export default Layout;

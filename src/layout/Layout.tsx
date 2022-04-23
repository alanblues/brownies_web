import Footer from './Footer/Footer';
import MenuWeb from './Header/MenuWeb';

export default function Layout(props: any): JSX.Element {
    return (
        <>
            <MenuWeb />
            {props.children}
            <Footer />
        </>
    );
};
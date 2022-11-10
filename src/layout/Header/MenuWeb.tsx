import { Link, useLocation } from "react-router-dom";

export default function MenuWeb(): JSX.Element {
    const { pathname } = useLocation();

    return (
        <header>
            <nav className="menu">
                <Link className={pathname === '/' ? 'active' : ''} to="/">Inicio</Link>
                <Link className={pathname === '/contact' ? 'active' : ''} to="/contact">Contactanos</Link>
                <Link className={pathname === '/about' ? 'active' : ''} to="/about">Acerca de</Link>
            </nav>
        </header>
    );
};
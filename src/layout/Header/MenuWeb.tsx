import { Link } from "react-router-dom";

export default function MenuWeb (): JSX.Element {
    return (
        <header>
            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/contact">Contactanos</Link>
                <Link to="/about">Acerca de</Link>
            </nav>
        </header>
    );
};
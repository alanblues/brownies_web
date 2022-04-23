import Layout from "../layout/Layout";
import { icons, pictures } from "../utilites/images";

export default function Home(): JSX.Element {
    return (
        <Layout>
            <section className="home">
                <article>
                    <h1 className="brownie">¿ Antojo de Dulce ?</h1>
                    <p className="title">Queremos acompañarte en cada momento especial</p>

                    <div className="home_icons">
                        {icons.map((i, index) => (
                            <img key={index} className="icon" src={i.img} alt={i.title} />
                        ))}
                    </div>
                </article>

                <article>
                    <h1 className="brownie">Pedidos personalizados</h1>
                    <p className="title">Opciones para todos los gustos</p>

                    <div className="home_icons">
                        {pictures.map((x, index) => (
                            <img key={index} className="icon border" src={x} />
                        ))}
                    </div>
                </article>
            </section>
        </Layout>
    );
};
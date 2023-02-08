
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Layout from "src/layout/Layout";
import { icons, brownies } from "src/utilites/images";

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

                    <div className="home_icons2">
                        <Carousel>
                            {brownies.map((x, index) => (
                                <img key={index} className="icon border" src={x} alt="" />
                            ))}
                        </Carousel>
                    </div>
                </article>
            </section>
        </Layout>
    );
};
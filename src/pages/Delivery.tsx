import Layout from "src/layout/Layout";
import { Link } from "react-router-dom";
import { entregas } from "src/utilites/images";
//https://nicepage.com/es/ht/17580/caminos-duros-de-industiral-plantilla-html


export default function Delivery(): JSX.Element {
    return (
        <Layout>

            <section className="delivery">
                <div className="delivery_title">
                    <h2>Nuestras zonas de entrega</h2>
                    <p>
                        Lugares m&aacute;s concurridos donde podr&aacute;s recoger tus pedidos,
                        no obstante puedes solicitar en otra direcci&oacute;n;
                        contactanos <Link to="/contact">aqu&iacute;</Link>
                    </p>
                </div>

                <div className="delivery_places">
                    {
                        entregas.map(e => (
                            <article key={e.id}>
                                <i className="map marker alternate icon large"></i>
                                <div className="delivery_places-addr">
                                    <h3>{e.lugar}</h3>
                                    <span>{e.direccion}</span>
                                    {e.calles && <span>Entre {e.calles}</span>}
                                    {e.colonia && <span>{e.colonia}</span>}
                                    <span>Horario {e.horario}</span>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>

        </Layout>
    )
}
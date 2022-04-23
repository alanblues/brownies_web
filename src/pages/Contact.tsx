import Layout from '../layout/Layout';
import { Banner } from '../components/Banner';

export default function Contact(): JSX.Element {
    return (
        <Layout>
            <section>
                <Banner
                    title="Informaci&oacute;n para tu evento o negocio?"
                    description="Llena el siguiente formulario para que te podamos contactar lo m&aacute;s
                    pronto posible"
                />
                <section className="form">
                    <h1 className="title">Contacto</h1>

                    <form action="">
                        <article>
                            <label htmlFor="">Nombre</label>
                            <input type="text" placeholder='Nombre completo' />
                        </article>
                    </form>
                </section>
            </section>
        </Layout>
    );
};
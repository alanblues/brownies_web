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
                <section className="contact_form">
                    <h1 className="title">Contacto</h1>

                    <form className="ui form">
                        <div className="field">
                            <label>Nombre</label>
                            <input type="text" name="first-name" placeholder="Nombre" />
                        </div>
                        <div className="field">
                            <label>Mensaje</label>
                            <input type="text" name="first-name" placeholder="Nombre" />
                        </div>

                        <button className="ui brownie button" type="button">Enviar</button>
                    </form>
                </section>
            </section>
        </Layout>
    );
};
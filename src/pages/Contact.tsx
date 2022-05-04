import Layout from '../layout/Layout';
import { Banner } from '../components/Banner';
import Formulary from '../components/Formulary';

export default function Contact(): JSX.Element {
    const handleSubmit = () => {
        alert('submit');
    }

    return (
        <Layout>
            <section>
                <Banner
                    title="Informaci&oacute;n para tu evento o negocio?"
                    description="Llena el siguiente formulario para que te podamos contactar lo m&aacute;s
                    pronto posible"
                />
                <section className="contact">
                    <div className="contact_form">
                        <Formulary title="Contacto" onSubmit={handleSubmit} />
                    </div>
                </section>
            </section>
        </Layout>
    );
};
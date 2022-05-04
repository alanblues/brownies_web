import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Banner } from "../components/Banner";
import Formulary from '../components/Formulary';

const posts = [
    { id: 1, name: 'Clim5', post: 'Gente, tenía que decir que la chica que me gusta se ha enfadado conmigo porque se ha enterado que también le tiro la caña a tres chicas más, y no entiendo por qué, ya que no le gusto, o eso parece. Le he explicado que es por diversificar esfuerzos y aumentar las posibilidades de éxito, y se ha cabreado aún más. ¿Alguien lo entiende? TQD' },
    { id: 2, name: 'Maracao.', post: 'Hoy, tengo un examen de recuperación de historia del año pasado en el que entra todo el libro y hay que hacer un trabajo escrito del propio libro. Me enteré de esto ayer y mi profesor también.' },
    { id: 3, name: 'Anonimo.', post: 'Hoy, y desde hace una semana, decidimos acoger a una compañera de piso coreana, parecía muy maja y tranquila. Se pasa el día bebiendo sake en el salón y cantando en coreano. Es alcohólica y gritona. ADV' },
    { id: 4, name: 'Confuso', post: 'Hace tiempo, que soy profundamente lesbiana. Desde que tengo uso de razón. Hoy ya es la segunda o tercera vez que sueño que hago una mamada. Al despertar y recordarlo me da repelús. ¿Qué me está pasando?' }
]

export default function Footer(): JSX.Element {
    const [nuevo, setNuevo] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    return (
        <Layout>
            <section>
                <Banner
                    title="Testimonios"
                    description="¿Tienes algún testimonio que contar? ¿Quieres decir algo al respecto de tu experiencia? ¿Reflexiones en voz alta? Éste es tu lugar. quejas o pensamientos de forma ingeniosa."
                />
                <section className="testimony">
                    <div className="testimony_new">
                        {!nuevo
                            ? <button
                                className="ui brownie rounded button"
                                type="button"
                                onClick={() => setNuevo(!nuevo)}
                            >Nuevo</button>
                            : <Formulary title="Dejanos tu opini&oacute;n y/o experiencia" onSubmit={setNuevo} />
                        }


                    </div>

                    <div className="testimony_list">
                        {posts.map(p => (<Comments key={p.id} comment={p} />))}
                    </div>
                </section>
            </section>
        </Layout>
    );
};

const Comments = ({ comment }: any): JSX.Element => (
    <article className="testimony_list-post">
        <h3>{comment.name}</h3>
        <p>
            <sup><i className="quote left icon"></i></sup>
            {comment.post} &nbsp;
            <sup><i className="quote right icon"></i></sup>
        </p>
    </article>
)
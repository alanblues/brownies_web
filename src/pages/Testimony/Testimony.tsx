import { useEffect, useState } from "react";
import Layout from "src/layout/Layout";
import { Banner } from "src/components/Banner"; 
import { NewTestimony } from "./NewTestimony";
import { ListTestimony } from "./ListTestimony";
import { scrollUp } from "src/utilites/util";

export default function Footer(): JSX.Element {
    const [nuevo, setNuevo] = useState<boolean>(false);

    useEffect(() => { scrollUp(); }, [])

    return (
        <Layout>
            <section>
                <Banner
                    title="Testimonios"
                    description="¿Tienes algún testimonio que contar?
                    ¿Quieres decir algo al respecto de tu experiencia? ¿Reflexiones en voz alta? Éste es tu lugar.
                    Quejas, sugerencias y/o pensamientos de forma ingeniosa."
                />
                <section className="testimony">
                    <div className="testimony_new">
                        {!nuevo
                            ? <button type="button"
                                className="ui brownie button"
                                onClick={() => setNuevo(!nuevo)}>Nuevo</button>
                            : <NewTestimony />
                        }
                    </div>
                    <ListTestimony />
                </section>
            </section>
        </Layout>
    );
};
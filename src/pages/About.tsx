import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import styled from "styled-components";

const About = styled.section`
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    @media only screen and (max-width: 800px) {
        width: 95%;
    }
    @media only screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Titulo = styled.h1`margin-bottom: 20px`;

const Contenido = styled.p`text-align: justify;`;

const Boton = styled.button`
    margin-top: 20px;
    @media only screen and (max-width: 380px) {
        width: 100%
    }
`;

const Lin = styled(Link)`
    color: #64442e;
    font-size: 16x;
    &:hover {
        color: #64442e;
        border-bottom: 1px solid #64442e;
    }
`;

export default function Footer(): JSX.Element {
    return (
        <Layout>
            <About>
                <Titulo className="title">ACERCA DE NOSOTROS</Titulo>
                <Contenido>
                    En 2021 estando en tiempos de pandemia aparentemente sin mucho que hacer decidimos elaborar brownies
                    que fueran echos con amor y que tuviera un verdadero sabor a Chocolate jalicience.
                    Se hicieron muchas pruebas y los diferentes comentarios de los clientes ayudaron a seguir
                    mejorando nuestra receta, llegando a tener una gran variedad de Brownies, Mini-Brownies,
                    Brownies Gigantes y bolitas de brownie.
                </Contenido>
                <Contenido>
                    Hoy en día siguen siendo muy importantes todas las sugerencias, pues gracias a nuestros clientes,
                    lo hemos logrado.
                    Siempre buscamos elaborar alimentos de una forma segura, que permitan a la gente sentir una
                    experiencia agradable y compartir en familia o con amigos momentos especiales de su vida.
                </Contenido>
                <Contenido>
                    Seleccionamos cuidadosamente nuestras materias primas, lo que nos ha permitido posicionarnos con
                    un excelente producto, acompañados de la fidelidad de todos nuestros clientes.
                </Contenido>


                <Lin to="/testimony">
                    Testimonios &nbsp;
                    <i className="right arrow icon"></i>
                </Lin>
            </About>
        </Layout>
    )
}

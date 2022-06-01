import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { pictures } from "../utilites/images";

const About = styled.section`
    width: 80%;
    margin: 15px auto;
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


const Ir = styled(Link)`
    color: #64442e;
    font-size: 16px;
    &:hover {
        color: #64442e;
        border-bottom: 1px solid #64442e;
    }
`;

const Imagen = styled.img`
    height: 215px;
    float: left;
    margin-right: 20px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    @media only screen and (max-width: 400px) {
        height: 170px;
    }
`

const Boton = styled.div`
    margin-top: 35px;
`;

export default function Footer(): JSX.Element {
    return (
        <Layout>
            <About>
                <Titulo className="title brownie">ACERCA DE NOSOTROS</Titulo>
                <Imagen src={pictures[0]} alt="" />
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
                    un excelen
                </Contenido>
                <Boton>
                    <Ir to="/testimony">
                        Testimonios &nbsp;
                        <i className="right arrow icon"></i>
                    </Ir>
                </Boton>
            </About>
        </Layout>
    )
}

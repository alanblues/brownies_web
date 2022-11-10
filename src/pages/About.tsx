import Layout from "src/layout/Layout";
import styled from "styled-components";
import { brownies } from "src/utilites/images";

const About = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 20px;

    @media only screen and (max-width: 840px) { width: 95%; }
    @media only screen and (max-width: 420px) { padding: 15px; }
`;

const Title = styled.h2`margin-bottom: 20px`;

const Content = styled.p`text-align: justify;`;

const Image = styled.img`
    height: 215px;
    float: left;
    margin-right: 20px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    @media only screen and (max-width: 400px) {
        height: 170px;
    }
`

export default function Footer (): JSX.Element {
    return (
        <Layout>
            <About>
                <Title className="title brownie">Acerca de Nosotros</Title>
                <Image src={brownies[0]} alt="" />
                <Content>
                    En 2021 estando en tiempos de pandemia aparentemente sin mucho que hacer decidimos elaborar brownies
                    que fueran echos con amor y que tuviera un verdadero sabor a Chocolate jalicience.
                    Se hicieron muchas pruebas y los diferentes comentarios de los clientes ayudaron a seguir
                    mejorando nuestra receta, llegando a tener una gran variedad de Brownies, Mini-Brownies,
                    Brownies Gigantes y bolitas de brownie.
                </Content>
                <Content>
                    Hoy en día siguen siendo muy importantes todas las sugerencias, pues gracias a nuestros clientes,
                    lo hemos logrado.
                    Siempre buscamos elaborar alimentos de una forma segura, que permitan a la gente sentir una
                    experiencia agradable y compartir en familia o con amigos momentos especiales de su vida.
                </Content>
                <Content>
                    Seleccionamos cuidadosamente nuestras materias primas, lo que nos ha permitido posicionarnos con
                    un excelen
                </Content>
                {/* <button onClick={() => navigate('/testimony')} className="ui right labeled icon button primary">
                    <i className="right arrow icon"></i>
                    Testimonios
                </button> */}
            </About>
        </Layout>
    )
}

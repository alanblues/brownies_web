import { useEffect } from "react";
import Layout from "src/layout/Layout"; 
import { useTerms } from "src/hooks/useTerms";
import { scrollUp } from "src/utilites/util";

export default function Contact(): JSX.Element {
    const {
        toggleTerms,
        toggleDefinitions,
        toggleUser,
        toggleAcordion
    } = useTerms();

    useEffect(()=> { scrollUp(); }, [])

    return (
        <Layout>
            <section className="terms">
                <article className="terms_conditions">
                    <h3 onClick={() => toggleAcordion('terms')}>
                        Términos y condiciones de los sitios
                        <a>
                            <i className={`chevron ${toggleTerms.icon} small icon`}></i>
                        </a>
                    </h3>
                    <div style={{ display: toggleTerms.display }}>
                        <p>
                            Los presentes Términos y Condiciones regulan los servicios puestos a disposición por Brownies-Commerce,
                            establecimiento consistente en la provisión de un sitio web de ventas online o presencial.
                        </p>
                        <p>
                            Por favor lea estos Términos y Condiciones cuidadosamente, teniendo en cuenta que mediante el uso de este Sitio de E-Commerce usted
                            está indicando su aceptación a los mismos.
                            Usted debe visitar esta página periódicamente para revisar los Términos y Condiciones debido a que los mismos son
                            obligatorios para usted.
                        </p>
                        <p>
                            Adicionalmente, recuerde que los precios, la transacción, tiempos de entrega, límites de compras, idoneidad del producto,
                            y demás condiciones de la transacción a través del Sitio E-commerce respectivo, son definidos por las Empresas y de ser necesario
                            podrán estar regulados por los términos y condiciones dispuestos por la Empresa.
                        </p>
                    </div>
                </article>

                <article className="terms_definitions">
                    <h3>
                        Definiciones
                        <a onClick={() => toggleAcordion('definitions')}>
                            <i className={`chevron ${toggleDefinitions.icon} small icon`}></i>
                        </a>
                    </h3>
                    <ul style={{ display: toggleDefinitions.display }}>
                        <li>
                            <span>Contrato de Transporte:</span> aquel acuerdo celebrado entre el Usuario y un Repartidor para que éste último se
                            encargue del traslado de un producto o paquete al Usuario, a cambio de una remuneración.
                        </li>
                        {/* <li>
                            <span>Empresa:</span> Es el comercio, restaurante, o establecimiento, ajenos a Brownies Love, que contratan las herramientas
                            tecnológicas o software puestas a disposición por Justo con el fin de que Justo le provea las herramientas de
                            E-Commerce para crear su Sitio E-commerce.
                            En tal sentido, las Empresas son las responsables exclusivas de los productos que comercializan a través de su
                            Sitio E-commerce y son las encargadas de determinar las condiciones en las que se ofertan sus productos y
                            con quienes finalmente los Usuarios celebran las transacciones de compraventa.
                        </li> */}
                        <li>
                            <span>Servicio de Domicilio:</span> Es el servicio contratado por parte del Usuario, mediante el cual celebra un
                            Contrato de Transporte con el Repartidor o con una Empresa para que éste traslade el producto o paquete a la dirección
                            seleccionada por el Usuario, a cambio de una remuneración.
                        </li>
                        <li>
                            <span>Repartidores:</span> Es la persona natural contratada por la Empresa, que se encarga de distribuir el producto hacia el lugar indicado
                            por el usuario (comprador).
                        </li>
                        <li>
                            <span>Sitio E-commerce:</span> Es la página web de la Empresa, el cual es controlado, operado y administrado por la Empresa
                            bajo su nombre de dominio, y en el cual se exhiben y ofrecen los productos a los Usuarios.
                        </li>
                        <li>
                            <span>Larson Corp:</span> es una sociedad y/o compañia que se encargo de realizar el sitio web de Brownies Love
                        </li>
                        <li>
                            <span>Usuario:</span> Es la persona natural o jurídica que hace uso de las herramientas tecnológicas o software que ofrece
                            el Sitio E-commerce, con el propósito de adquirir un producto ofertado por la Empresa y contratar los servicios.
                        </li>
                        <li>
                            <span>Cancelación y devolución de los pedidos:</span> Una vez confirmada la compra por el Usuario, no será posible cancelar o
                            devolver el pedido a través del Sitio de E-Commerce. Cualquier solicitud respecto a devoluciones, derecho de retracto y/o
                            cancelaciones de pedidos serán solicitados o acordados exclusivamente entre la Empresa y el Usuario.
                        </li>
                    </ul>
                </article>

                <article className="terms_user">
                    <h3>
                        Deberes de los usuarios
                        <a onClick={() => toggleAcordion('user')}>
                            <i className={`chevron ${toggleUser.icon} small icon`}></i>
                        </a>
                    </h3>
                    <ul style={{ display: toggleUser.display }}>
                        <li>Suministrar información veraz y fidedigna al momento de crear su Cuenta de Usuario;</li>
                        <li> Hacer un uso responsable y correcto del Sitio E-commerce. </li>
                        <li>Abstenerse de utilizar el Sitio E-commerce para realizar actos contrarios a la ley, especialmente aquellos relacionados con el derecho de propiedad intelectual de terceros.</li>
                        <li>Pagar oportunamente a las Empresas por los productos adquiridos o a los Repartidores por la prestación del servicio de domicilio.</li>
                        <li>Informar a la Empresa cualquier usurpación o suplantación de identidad o de los datos de validación.</li>
                        <li> Abstenerse de realizar conductas atentatorias del funcionamiento de los Sitios de E-commerce, así como violar o intentar violar su seguridad. Específicamente no podrán (i) acceder a servidores o cuentas a los cuales el usuario no está autorizado a ingresar; (ii) intentar probar la vulnerabilidad de un sistema o red sin la debida autorización o violar las medidas de seguridad o autenticación, (iii) intentar interferir con los servicios prestados a un usuario, servidor o red incluyendo, pero sin limitarse al envío de virus a través de los Sitios de E-commerce. La violación de cualquier sistema o red de seguridad puede resultar en responsabilidades civiles y penales. La Empresa o Justo investigará la ocurrencia de hechos que puedan constituir violaciones a lo anterior y cooperará con cualquier autoridad competente en la persecución de los usuarios que estén envueltos en tales violaciones.</li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}
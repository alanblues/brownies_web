import { Link } from "react-router-dom";
import { whatsAppMsg } from "src/utilites/images";

export default function Footer(): JSX.Element {
  const handleWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=523331986518&text=${whatsAppMsg}`;
    window.open(url, "_blank");
  };

  return (
    <footer>
      <section className="footer">
        <div className="footer_content">
          <div>
            <h3>Con&oacute;cenos</h3>
            <ul>
              <li><a href="">Galer&iacute;a</a></li>
              <li><Link to="/deliveries">Zona de Entregas y Horarios</Link></li>
              <li><Link to="/terms">T&eacute;rminos y condiciones</Link></li>
              <li><Link to="/testimony">Testimonios</Link></li>
            </ul>
          </div>

          <div>
            <h3>Cont&aacute;ctanos</h3>
            <ul>
              <li><a href="mailto:postres_na@larson.com?subject=brownies">postres@larson.com</a></li>
              <li><a href="tel:3317460383">3331988787</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="footer_social">
        <a href="#"><i className="facebook f circular large icon brown"></i></a>
        <a href="#"><i className="instagram circular large icon brown"></i></a>
        <a onClick={handleWhatsapp} title="Envianos un WhatsApp"><i className="whatsapp circular large icon brown"></i></a>
      </section>
    </footer>
  );
}

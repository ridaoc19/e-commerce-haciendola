import Svg from "../../../components/assets/icons/Svg";
import Button from "../../../components/common/button/Button";
import useMediaQuery from "../../../hooks/useMediaQuery";


function Footer() {
  const { mediaQuery } = useMediaQuery()
  return (
    <div className="footer">
      <div className="footer__container">

        <div className={`footer__top ${mediaQuery}`}>
          <div className="footer__top-left">
            <div className="footer__top-left-logo">
              {Svg({ type: "logo_secundary", height: 80, width: 80 })}
            </div>
          </div>

          <div className="footer__top-center">
            <div className={`footer__top-center-container ${mediaQuery}`}>
              <div className="footer__top-center-title">
                <h4>Haciéndola</h4>
              </div>
              <div className={`footer__top-center-content`}>
                <Button button={{ type: 'link', text: "(+57) 312 000 00 00", handleClick: () => { } }} svgRight={{ type: 'phone' }} />
                <Button button={{ type: 'link', text: 'haciéndola.ecommerce@outlook.com', handleClick: () => { } }} svgRight={{ type: 'email' }} />
                <Button button={{ type: 'link', text: 'Cra 77 No. 48-06', handleClick: () => { } }} svgRight={{ type: 'location' }} />
                <Button button={{ type: 'link', text: 'Lunes - Viernes de 8 AM - 6 PM', handleClick: () => { } }} svgRight={{ type: 'time' }} />
              </div>
            </div>
          </div>

          <div className="footer__top-right">
            <div className={`footer__top-right-container ${mediaQuery}`}>
              <div className="footer__top-right-social-networks-title">
                <h4>Síguenos</h4>
              </div>
              <div className="footer__top-right-social-networks-icon">
                {Svg({ type: "instagram", height: 20, width: 20 })}
                {Svg({ type: "facebook", height: 20, width: 20 })}
                {Svg({ type: "linkedIn", height: 20, width: 20 })}
                {Svg({ type: "twitter", height: 20, width: 20 })}
                {Svg({ type: "snapchat", height: 20, width: 20 })}
                {Svg({ type: "messenger", height: 20, width: 20 })}
                {Svg({ type: "whatsapp", height: 20, width: 20 })}
              </div>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-text">
            <p>El formato de los precios puede verse afectado por las configuraciones y diferencia de navegadores</p>
            <p>© 2023 haciéndola.com, Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
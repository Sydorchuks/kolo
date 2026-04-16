import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-left">
            <div className="footer-logo-row">
              <img src="/logo.png" alt="logo" className="footer-logo" />
              <p>Благодійний фонд <b>“КОЛО”</b></p>
            </div>
          </div>

          <div className="footer-nav">
            <a>Про Фонд</a>
            <a>Проекти</a>
            <a>Партнерам</a>
            <a>Банк ідей</a>
          </div>

          <div className="footer-contacts">
            <a href="mailto:kolo.fund@gmail.com">kolo.fund@gmail.com</a>
            <a href="tel:+380936264209">+380 93 626 4209</a>

            <div className="footer-socials">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>

          <div className="footer-actions">
            <button className="btn-outline">Підтримати</button>
            <button className="btn-primary">Документи</button>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2023 KOLO. ALL RIGHTS RESERVED.</p>

          <div className="footer-created">
            <span>Created by:</span>
            <img src="/ficus.png" alt="ficus" />
          </div>
        </div>
      </div>

    </footer>
  )
}
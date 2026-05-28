import Container from "../../ui/Container/Container"
import Title from "../../ui/Title/Title"
import Button from "../../ui/Button/Button"
import "./Directions.css"

export default function Directions() {
  return (
    <section className="directions">
      <div className="directions-lines" />
      <Container>
        <div className="directions-inner">

          <div className="directions-left">
            <Title>
              Напрями діяльності
            </Title>

            <div className="directions-texts">
              <p className="directions-text">
                З початком повномасштабної війни ми додали
                ще один напрям – безпеку.
              </p>
              <p className="directions-text">
                Зараз ми постачаємо нашим бійцям необхідне
                для ведення бою, а цивільним – гуманітарну
                підтримку та допомагаємо з евакуацією.
              </p>
            </div>

            <Button
              variant="yellow"
              className="directions-btn"
            >
              Дізнатись більше
            </Button>
          </div>

          <div className="directions-grid">
            <div className="direction-card direction-card-blue">
              <div className="direction-card-inner">
                <h3>Освіта</h3>
                <p>
                  Впроваджуємо новації в освітні процеси,
                  спрощуємо доступ до освіти та оснащуємо
                  спеціалізовані заклади.
                </p>
              </div>
            </div>

            <div className="direction-card direction-card-light">
              <div className="direction-card-inner">
                <h3>Медицина</h3>
                <p>
                  Впроваджуємо новації в освітні процеси,
                  спрощуємо доступ до освіти та оснащуємо
                  спеціалізовані заклади.
                </p>
              </div>
            </div>

            <div className="direction-card direction-card-light">
              <div className="direction-card-inner">
                <h3>Культура</h3>
                <p>
                  Впроваджуємо новації в освітні процеси,
                  спрощуємо доступ до освіти та оснащуємо
                  спеціалізовані заклади.
                </p>
              </div>
            </div>

            <div className="direction-card direction-card-blue">
              <div className="direction-card-inner">
                <h3>Генератори</h3>
                <p>
                  Впроваджуємо новації в освітні процеси,
                  спрощуємо доступ до освіти та оснащуємо
                  спеціалізовані заклади.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="directions-banner">
          <img
            src="/wheel.png"
            alt=""
            className="banner-wheel"
          />
          <div className="banner-content">
            <p className="banner-main">
              Ми збираємо на військові потреби
              та наближаємо перемогу.
            </p>

            <p className="banner-sub">
              Але й докладаємо зусилля для того,
              що відкладають на «вже після війни».
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
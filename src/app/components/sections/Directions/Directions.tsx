import Container from "../../ui/Container/Container"
import Title from "../../ui/Title/Title"
import Button from "../../ui/Button/Button"
import "./Directions.css"

export default function Directions() {
  return (
    <section className="directions">
      <Container>

        <div className="directions-inner">

          <div className="directions-left">
            <Title>Напрями діяльності</Title>

            <p className="directions-text">
              З початком повномасштабної війни ми додали ще один напрям – безпеку.
            </p>

            <p className="directions-text">
              Зараз ми постачаємо нашим бійцям необхідне для ведення бою, а цивільним – гуманітарну підтримку та допомагаємо з евакуацією.
            </p>

            <Button variant="yellow" size="md" className="directions-btn">
              Дізнатись більше
            </Button>
          </div>

          <div className="directions-grid">

            <div className="card card-blue">
              <h3>Освіта</h3>
              <p>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</p>
            </div>

            <div className="card card-light">
              <h3>Медицина</h3>
              <p>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</p>
            </div>

            <div className="card card-light">
              <h3>Культура</h3>
              <p>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</p>
            </div>

            <div className="card card-blue">
              <h3>Генератори</h3>
              <p>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</p>
            </div>

          </div>

        </div>

        <div className="directions-banner">
          <div className="banner-bg" />

          <div className="banner-content">
            <p className="banner-main">
              Ми збираємо на військові потреби та наближаємо перемогу.
            </p>

            <p className="banner-sub">
              Але й докладаємо зусилля для того, що відкладають на «вже після війни».
            </p>
          </div>
        </div>

      </Container>
    </section>
  )
}
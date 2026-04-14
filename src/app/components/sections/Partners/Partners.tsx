import Container from "../../ui/Container/Container"
import "./Partners.css"

const partners = [
  "/eva.png",
  "/digital.png",
  "/president.png",
  "/nova.png",
  "/eduation.png",
  "/cabinet.png",
]

export default function Partners() {
  return (
    <section className="partners">
      <Container>
        <div className="partners-inner">

          <div className="partners-text">
            Партнери, які <br />
            завжди підтримують <br />
            наші проєкти
          </div>

          <div className="partners-logos">
            {partners.map((src, i) => (
              <div key={i} className="partner-item">
                <img src={src} alt="" />
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  )
}
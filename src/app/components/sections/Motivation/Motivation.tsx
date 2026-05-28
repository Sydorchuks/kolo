import Container from "../../ui/Container/Container"
import Title from "../../ui/Title/Title"
import Button from "../../ui/Button/Button"
import "./Motivation.css"

export default function Motivation() {
  return (
    <section className="motivation">
      <Container>

        <div className="motivation-header">
          <Title withLine>
            Що нас мотивує
          </Title>

          <p className="motivation-subtitle">
            Наше завдання - створити умови, аби зустрілися ті,
            хто хоче допомогти, з тими, хто потребує допомоги.
          </p>
        </div>

        <div className="motivation-content">

          <div className="motivation-column">
            <div className="motivation-card">
              <img src="/help.png" className="card-icon" />
              <h3>Допомога</h3>
              <p>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</p>
            </div>

            <div className="motivation-card">
              <img src="/patriot.png" className="card-icon" />
              <h3>Патріотизм</h3>
              <p>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</p>
            </div>
          </div>

          <div className="motivation-center">
            <div className="center-wrapper">

              <div className="center-lines"></div>

              <img src="/hands.png" className="center-img" />

              <img src="/logo.png" className="center-logo" />

              <Button className="center-btn" variant="yellow">
                Більше <br />про фонд
              </Button>

            </div>
          </div>

          <div className="motivation-column">
            <div className="motivation-card">
              <img src="/support.png" className="card-icon" />
              <h3>Надання необхідного</h3>
              <p>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</p>
            </div>

            <div className="motivation-card">
              <img src="/safety.png" className="card-icon" />
              <h3>Безпека</h3>
              <p>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
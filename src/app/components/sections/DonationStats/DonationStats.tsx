import Section from "../../ui/Section/Section"
import Button from "../../ui/Button/Button"
import "./DonationStats.css"

export default function DonationStats() {
  return (
    <Section className="donation-stats">
      <div className="donation-container">

        <div className="donation-top">
          <div className="donation-left">
            <h2>
              Обертаємо коло тут і зараз.<br />
              І даємо можливість побачити<br />
              твій внесок в дії
            </h2>
          </div>

          <div className="donation-right">
            <p>
              Понад 8 років робимо масштабні проекти у сферах медицини,
              культури та освіти. Бо це стовпи сильної держави.
            </p>
          </div>
        </div>

        <div className="donation-contribution">
          <div className="donation-box donation-box-dark">
            <span>Мінімальний внесок:</span>
            <strong>15 грн.</strong>
          </div>

          <div className="donation-box donation-box-light">
            <span>Максимальний внесок:</span>
            <strong>154000 грн.</strong>
          </div>
        </div>

        <div className="donation-header">
          <h2>
            Результати роботи під час<br />
            повномасштабної війни
          </h2>

          <Button variant="yellow">Детальна звітність</Button>
        </div>

        <div className="donation-grid">
          {[
            { title: "Евакуювали людей", value: "4000" },
            { title: "Гуманітарна допомога", value: "2300т" },
            { title: "Закупили дрони", value: "432" },
            { title: "Навчили операторів БПЛА", value: "411" },
            { title: "Поставили аптечки", value: "1300" },
            { title: "Купили амуніцію", value: "4560" },
            { title: "Надіслали медикаменти", value: "60т" },
            { title: "Придбали радіостанції", value: "2000" },
          ].map((item, i) => (
            <div className="donation-card" key={i}>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}
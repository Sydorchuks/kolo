import Container from "../../ui/Container/Container"
import Title from "../../ui/Title/Title"
import Button from "../../ui/Button/Button"
import "./News.css"
import NewsCard from "../../ui/NewsCard/NewsCard"

const newsData = [
  {
    id: 1,
    image: "/news1.png",
    date: "17.01.2023",
    text: "ДСНС передано 3 реанімобілі в повній комплектації відповідно до класу C"
  },
  {
    id: 2,
    image: "/news1.png",
    date: "17.01.2023",
    text: "Отримали поставку генераторів від наших партнерів з Іспанії AGA-Ukraine"
  },
  {
    id: 3,
    image: "/news1.png",
    date: "17.01.2023",
    text: "ДСНС передано 3 реанімобілі в повній комплектації відповідно до класу C"
  }
]

export default function News() {
  return (
    <section className="news">
      <Container>

        <div className="news-header">
          <Title withLine>Новини</Title>

          <div className="news-actions">
            <Button variant="outline">Більше новин</Button>
          </div>
        </div>

        <div className="news-grid">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              date={item.date}
              text={item.text}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}
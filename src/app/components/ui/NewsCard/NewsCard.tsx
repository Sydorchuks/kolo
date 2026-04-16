import Button from "../Button/Button"
import "./NewsCard.css"

type NewsCardProps = {
  image: string
  date: string
  text: string
}

export default function NewsCard({ image, date, text }: NewsCardProps) {
  return (
    <div className="news-card">

      <div className="news-image">
        <img src={image} alt="news" />
        <span className="news-date">{date}</span>
      </div>

      <div className="news-content">
        <p>{text}</p>

        <Button>Прочитати</Button>
      </div>

    </div>
  )
}
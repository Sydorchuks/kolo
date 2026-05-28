import "./GalleryCard.css"

type Props = {
  image: string
  title: string
  date: string
  amount: string
}

export default function GalleryCard({
  image,
  title,
  date,
  amount
}: Props) {
  return (
    <div className="gallery-card">
      <img src={image} alt="" className="gallery-img" />

      <div className="gallery-content">
        <p className="gallery-title">{title}</p>

        <div className="gallery-bottom">
          <span className="gallery-date">{date}</span>
          <span className="gallery-price">{amount}</span>
        </div>
      </div>
    </div>
  )
}
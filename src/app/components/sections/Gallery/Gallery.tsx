import GalleryCard from "../../ui/GalleryCard/GalleryCard"
import "./Gallery.css"

const data = [
  {
    image: "/g1.png",
    title: "20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle",
    date: "18.01.2022",
    amount: "$29 962"
  },
  {
    image: "/g1.png",
    title: "6 тепловізорів Infiray E6+ V3.0",
    date: "18.01.2022",
    amount: "$12 433"
  },
  {
    image: "/g1.png",
    title: "Апарати V.A.C. терапії",
    date: "18.01.2022",
    amount: "$67 122"
  },
  {
    image: "/g1.png",
    title: "20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle",
    date: "18.01.2022",
    amount: "$29 962"
  },
  {
    image: "/g1.png",
    title: "6 тепловізорів Infiray E6+ V3.0",
    date: "18.01.2022",
    amount: "$12 433"
  },
  {
    image: "/g1.png",
    title: "Апарати V.A.C. терапії",
    date: "18.01.2022",
    amount: "$67 122"
  }
]

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-container">

        <div className="gallery-header">
          <div>
            <h2>Фотозвіти</h2>
            <p>
              Ви також можете подивитись детальну фінансову звітність
              за реалізованими проектами.
            </p>
          </div>

          <button className="gallery-btn">
            Подивитись звітність
          </button>
        </div>

        <div className="gallery-grid">
          {data.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}
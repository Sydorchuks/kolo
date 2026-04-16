import Button from "../../ui/Button/Button"
import "./Projects.css"

type Props = {
  category: string
  title: string
  description: string
  image: string
}

export default function Project({
  category,
  title,
  description,
  image,
}: Props) {
  return (
    <div className="project">

      <div className="project-badge">
        {category}
      </div>

      <h3 className="project-title">
        {title}
      </h3>

      <p className="project-desc">
        {description}
      </p>

      <div className="project-image">
        <img src={image} alt="" />
      </div>

      <Button className="project-btn">
        Дізнатись більше і підтримати
      </Button>

    </div>
  )
}
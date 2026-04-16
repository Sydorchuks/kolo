import Section from "../../ui/Section/Section"
import Container from "../../ui/Container/Container"
import Title from "../../ui/Title/Title"
import Button from "../../ui/Button/Button"
import "./ProjectSection.css"
import Project from "./Projects"

export default function ProjectsSection() {
  return (
    <Section className="projects">
      <Container>

        <div className="projects-header">
          <Title withLine>
            Наші проєкти
          </Title>

          <div className="projects-actions">
            <Button variant="outline">
              Більше проєктів
            </Button>

            <Button>
              Запропонувати проєкт
            </Button>
          </div>
        </div>

        <div className="projects-grid">

          <Project
            category="Медицина"
            title="20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle"
            description="Lorem: Але я повинен пояснити вам, як народилася вся ця помилка."
            image="/proj1.png"
          />

          <Project
            category="Освіта"
            title="20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle"
            description="Lorem: Але я повинен пояснити вам, як народилася вся ця помилка."
            image="/proj1.png"
          />

          <Project
            category="Культура"
            title="20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle"
            description="Lorem: Але я повинен пояснити вам, як народилася вся ця помилка."
            image="/proj1.png"
          />

          <Project
            category="Медицина"
            title="20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle"
            description="Lorem: Але я повинен пояснити вам, як народилася вся ця помилка."
            image="/proj1.png"
          />

          <Project
            category="Освіта"
            title="20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle"
            description="Lorem: Але я повинен пояснити вам, як народилася вся ця помилка."
            image="/proj1.png"
          />

          <Project
            category="Культура"
            title="20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle"
            description="Lorem: Але я повинен пояснити вам, як народилася вся ця помилка."
            image="/proj1.png"
          />

        </div>

      </Container>
    </Section>
  )
}
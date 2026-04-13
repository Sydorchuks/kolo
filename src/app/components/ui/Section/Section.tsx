import "./Section.css"
import clsx from "clsx"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: Props) {
  return (
    <section className={clsx("section", className)}>
      {children}
    </section>
  )
}
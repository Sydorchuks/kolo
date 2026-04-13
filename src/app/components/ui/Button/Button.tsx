import "./Button.css"
import clsx from "clsx"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "outline" | "yellow"
  size?: "sm" | "md" | "lg"
  shape?: "default" | "circle"
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  shape = "default",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        shape === "circle" && "btn-circle",
        className
      )}
    >
      {children}
    </button>
  )
}
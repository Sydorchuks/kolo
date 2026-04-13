import "./Title.css"

type Props = {
  children: React.ReactNode
  withLine?: boolean
  rightContent?: React.ReactNode
}

export default function Title({
  children,
  withLine = false,
  rightContent,
}: Props) {
  return (
    <div className="title">
      <div className="title-left">
        <h2 className="title-text">{children}</h2>

        {withLine && (
          <div className="title-line">
            <span className="title-dot" />
          </div>
        )}
      </div>

      {rightContent && (
        <div className="title-right">
          {rightContent}
        </div>
      )}
    </div>
  )
}
import "./box.scss"

interface Props {
  children: any
}
function BoxComponent({ children }: Props) {
  return <div className="box">{children}</div>
}

export default BoxComponent

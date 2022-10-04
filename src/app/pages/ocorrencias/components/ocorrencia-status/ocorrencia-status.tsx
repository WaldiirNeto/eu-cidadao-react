import "./ocorrencia-status.scss"

interface Props {
  status: string
}
function OcorrenciaStatusComponent({ status }: Props) {
  return (
    <div className={"text-center ocorrencia-" + status}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  )
}

export default OcorrenciaStatusComponent

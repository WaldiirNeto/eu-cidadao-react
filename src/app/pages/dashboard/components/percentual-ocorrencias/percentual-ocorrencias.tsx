import "./percentual-ocorrencias.scss"
function PercentualOcorrenciasComponent() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column align-items-center mb-2">
        <small className="fw-bold">Quantidade de ocorrências</small>
        <div className="percentual-qtd-ocorrencias d-flex align-items-center justify-content-center">
          240
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mb-5">
        <small className="fw-bold">Ocorrências resolvidas</small>
        <div className="percentual-qtd-ocorrencias-resolvidas d-flex align-items-center justify-content-center">
          240
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mb-2">
        <small className="fw-bold">Percentual resolvidas</small>
        <div className="percentual-resolvidas d-flex align-items-center justify-content-center">
          240
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <small className="fw-bold">Percentual pendentes</small>
        <div className="percentual-pendentes d-flex align-items-center justify-content-center">
          240
        </div>
      </div>
    </div>
  )
}

export default PercentualOcorrenciasComponent

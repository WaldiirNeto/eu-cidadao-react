import { Card } from "react-bootstrap"
import { DashboardCard } from "../../models"
import "./ocorrencia-item-card.scss"
interface Props {
  dashboardCard: DashboardCard
}
function OcorrenciaItemCard({ dashboardCard }: Props) {
  return (
    <li className="col-md-auto mb-2">
      <Card style={{ width: "295px" }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold h6">{dashboardCard.titulo}</Card.Title>
          <div className="d-flex">
            <div className="p-2">
              <Card.Subtitle className="mb-2 text-muted">
                <span className="text-primary-medium ocorrencias-status">
                  Ocorrências abertas
                </span>
              </Card.Subtitle>
              <Card.Text className="d-flex">
                <span>{dashboardCard.ocorrencias_abertas}</span>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                <span className="text-primary-medium ocorrencias-status">
                  Ocorrências tratadas
                </span>
              </Card.Subtitle>
              <Card.Text>
                <span>{dashboardCard.ocorrencias_tratadas}</span>
              </Card.Text>
            </div>
            <Card.Img
              alt="card image"
              className="p-2 img-fluid"
              src={dashboardCard.imagem}
              style={{ width: "120.75px" }}
            ></Card.Img>
          </div>
        </Card.Body>
      </Card>
    </li>
  )
}
export default OcorrenciaItemCard

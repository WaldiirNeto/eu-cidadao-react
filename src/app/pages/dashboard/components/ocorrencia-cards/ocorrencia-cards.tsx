import { AlertAtomState } from "app/shared/atoms/alert.atom"
import { useEffect } from "react"
import { useRecoilState, useResetRecoilState } from "recoil"
import { dashboardCardAtomState } from "../../atoms/dashboard.atom"
import { IDashboardService } from "../../models"
import OcorrenciaItemCard from "../ocorrencia-item-card/ocorrencia-item-card"

interface Props {
  service: IDashboardService
}
function DashboardCardListComponent({ service }: Props) {
  const resetdashboardState = useResetRecoilState(dashboardCardAtomState)
  const [state, setState] = useRecoilState(dashboardCardAtomState)
  const [alertState, setAlertState] = useRecoilState(AlertAtomState)
  useEffect(() => resetdashboardState(), [])
  useEffect(() => {
    service
      .dashboardCardList()
      .then(cardList => {
        setState(objCurrent => ({
          ...objCurrent,
          loading: false,
          cardList: cardList.data,
        }))
      })
      .catch(_ => {
        setAlertState(obtToUpdate => ({
          ...obtToUpdate,
          type: `danger`,
          message: `Não foi possível buscar a lista, atualize a pagina e tente novamente`,
          show: true,
        }))

        setState(objCurrent => ({
          ...objCurrent,
          loading: false,
        }))
      })
  }, [])
  return (
    <ul
      className="row"
      style={{
        listStyleType: "none",
        padding: "0",
      }}
    >
      {state.cardList.length
        ? state.cardList.map(card => (
            <OcorrenciaItemCard key={card.id} dashboardCard={card} />
          ))
        : "Não foi possível listar os dados"}
    </ul>
  )
}

export default DashboardCardListComponent

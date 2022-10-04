import DashboardCardListComponent from "./components/ocorrencia-cards/ocorrencia-cards"
import BarChartComponent from "./components/bar-chart/bar-chart"
import { factorydashboardService } from "app/shared/factories"
import LineChartComponent from "./components/line-chart/line-chart"
import BoxComponent from "app/shared/components/box/box"
import PercentualOcorrenciasComponent from "./components/percentual-ocorrencias/percentual-ocorrencias"

function DashboardComponent() {
  return (
    <>
      <DashboardCardListComponent service={factorydashboardService()} />
      <div className="">
        <BoxComponent>
          <div className="d-flex">
            <div className="p-2 align-self-center">
              <PercentualOcorrenciasComponent />
            </div>
            <div className="p-2 flex-column">
              <BarChartComponent service={factorydashboardService()} />
              <LineChartComponent service={factorydashboardService()} />
            </div>
          </div>
        </BoxComponent>
      </div>
    </>
  )
}

export default DashboardComponent

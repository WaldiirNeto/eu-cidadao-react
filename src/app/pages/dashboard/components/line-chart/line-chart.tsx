import { AlertAtomState } from "app/shared/atoms/alert.atom"
import { useEffect } from "react"
import { useRecoilState, useResetRecoilState } from "recoil"
import { dashboardLineChartAtomState } from "../../atoms/dashboard.atom"
import { IDashboardService } from "../../models"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { errorGlobal } from "app/global/error.global"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
interface Props {
  service: IDashboardService
}
function LineChartComponent({ service }: Props) {
  const optionsBarChart = {
    responsive: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Percentual de resolução mensal",
      },
    },
  }
  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const resetLineChartState = useResetRecoilState(dashboardLineChartAtomState)
  const [state, setState] = useRecoilState(dashboardLineChartAtomState)
  const [alertState, setAlertState] = useRecoilState(AlertAtomState)
  const errorResponse = errorGlobal((error: any) => {
    setState(old => ({ ...old, error: error }))
  })

  useEffect(() => resetLineChartState(), [])
  useEffect(() => {
    service
      .dashboardLineChart()
      .then(lineChartData => {
        setState(objCurrent => ({
          ...objCurrent,
          loading: false,
          lineChartData: {
            labels,
            datasets: lineChartData.data,
          },
        }))
      })
      .catch(errorResponse)
  }, [])

  return (
    <>
      {state.lineChartData?.datasets?.length ? (
        <Line
          width={900}
          height={200}
          options={optionsBarChart}
          data={state.lineChartData}
        />
      ) : (
        "Não foi possível listar os dados do line chart"
      )}
    </>
  )
}

export default LineChartComponent

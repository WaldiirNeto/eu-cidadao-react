import { AlertAtomState } from "app/shared/atoms/alert.atom"
import { useEffect } from "react"
import { useRecoilState, useResetRecoilState } from "recoil"
import { dashboardBarChartAtomState } from "../../atoms/dashboard.atom"
import { IDashboardService } from "../../models"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { errorGlobal } from "app/global/error.global"
import { AxiosError } from "axios"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Props {
  service: IDashboardService
}

function BarChartComponent({ service }: Props) {
  const optionsBarChart = {
    responsive: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Controle de ocorrência mensal",
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

  const resetdashboardState = useResetRecoilState(dashboardBarChartAtomState)
  const [state, setState] = useRecoilState(dashboardBarChartAtomState)
  const errorResponse = errorGlobal((error: any) => {
    setState(old => ({ ...old, error: error }))
  })
  useEffect(() => resetdashboardState(), [])
  useEffect(() => {
    service
      .dashboardBarChart()
      .then(barChartData => {
        setState(objCurrent => ({
          ...objCurrent,
          loading: false,
          barChartData: {
            labels,
            datasets: barChartData.data,
          },
        }))
      })
      .catch(errorResponse)
  }, [])
  return (
    <>
      {state.barChartData?.datasets?.length ? (
        <Bar
          width={900}
          height={200}
          options={optionsBarChart}
          data={state.barChartData}
        />
      ) : (
        "Não foi possível listar os dados do bar chart"
      )}
    </>
  )
}

export default BarChartComponent

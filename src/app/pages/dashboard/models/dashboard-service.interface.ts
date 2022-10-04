import { AxiosResponse } from 'axios'
import { DashboardCard, DashboardChartModel } from './dashboard.model'

export interface IDashboardService {
    dashboardCardList: () => Promise<AxiosResponse<Array<DashboardCard>>>
    dashboardBarChart: () => Promise<AxiosResponse<Array<DashboardChartModel>>>
    dashboardLineChart: () => Promise<AxiosResponse<Array<DashboardChartModel>>>

}

import { HttpPrivateClientService } from 'app/core/http/http-private-client.service'
import API_URL from 'app/shared/helpers/api-router.helper'
import { AxiosResponse } from 'axios'
import { DashboardCard, DashboardChartModel, IDashboardService } from '../models'

export class DashboardService implements IDashboardService {
    constructor(private readonly _http: HttpPrivateClientService) { }

    public dashboardCardList(): Promise<AxiosResponse<Array<DashboardCard>>> {
        return this._http.get(API_URL.DASHBOARD_CARDS)
    }

    public dashboardBarChart(): Promise<AxiosResponse<Array<DashboardChartModel>>> {
        return this._http.get(API_URL.DASHBOARD_BARCHART)
    }

    public dashboardLineChart(): Promise<AxiosResponse<Array<DashboardChartModel>>> {
        return this._http.get(API_URL.DASHBOARD_LINECHART)

    }
}
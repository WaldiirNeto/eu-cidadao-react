import { HttpPrivateClientService } from '../../../app/core/http/http-private-client.service'
import { IDashboardService } from '../../../app/pages/dashboard/models'
import { DashboardService } from '../../../app/pages/dashboard/services/dashboard.service'

export const factorydashboardService = (): IDashboardService =>
    new DashboardService(new HttpPrivateClientService())
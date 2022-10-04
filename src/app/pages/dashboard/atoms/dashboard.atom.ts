import { ChartData } from 'chart.js'
import { atom } from 'recoil'
import { DashboardCard } from '../models'

export const dashboardCardAtomState = atom({
    key: 'dashboardAtomState',
    default: {
        cardList: [] as DashboardCard[],
        error: '',
        loading: true
    }
})

export const dashboardBarChartAtomState = atom({
    key: 'dashboardBarChartAtomState',
    default: {
        barChartData: {} as ChartData<any, any, any>,
        error: '',
        loading: true
    }
})

export const dashboardLineChartAtomState = atom({
    key: 'dashboardLineChartAtomState',
    default: {
        lineChartData: {} as ChartData<any, any, any>,
        error: '',
        loading: true
    }
})
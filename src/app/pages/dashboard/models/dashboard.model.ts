export interface DashboardCard {
    id: number,
    titulo: string
    ocorrencias_abertas: string,
    ocorrencias_tratadas: string,
    imagem: string
}

export interface DashboardChartModel {
    backgroundColor: string,
    data: Array<number>,
    label: string
}
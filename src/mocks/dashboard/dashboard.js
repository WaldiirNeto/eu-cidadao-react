const dashboardCardListDataMock = [
  {
    id: 1,
    titulo: `Água e Esgoto`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/038/232/original/rafiki.png?1664284332`,
  },
  {
    id: 2,
    titulo: `Energia e Iluminação`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/039/305/original/rafiki.png?1664310853`,
  },
  {
    id: 3,
    titulo: `Conservação e Limpeza`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/039/310/original/rafiki.png?1664310953`,
  },
  {
    id: 4,
    titulo: `Meio Ambiente`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/038/232/original/rafiki.png?1664284332`,
  },
  {
    id: 5,
    titulo: `Trânsito e vias Públicas`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/038/232/original/rafiki.png?1664284332`,
  },
  {
    id: 6,
    titulo: `Escola e Educação`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/038/232/original/rafiki.png?1664284332`,
  },
  {
    id: 7,
    titulo: `saúde Pública`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/038/232/original/rafiki.png?1664284332`,
  },
  {
    id: 8,
    titulo: `Segurança Pública`,
    ocorrencias_abertas: 20,
    ocorrencias_tratadas: 10,
    imagem: `https://uploaddeimagens.com.br/images/004/038/232/original/rafiki.png?1664284332`,
  },
]

const dashboardBarChartDataMock = [
  {
    label: "Total de ocorrências",
    data: [20, 30, 40, 50, 80, 60, 75, 100, 322, 74, 10, 89],
    backgroundColor: "#D6E7FF",
  },
  {
    label: "Ocorrências resolvidas",
    data: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9],
    backgroundColor: "#00327A",
  },
]

const dashboardLineChartDataMock = [
  {
    label: "Percentual",
    data: [20, 30, 40, 50, 80, 60, 75, 100, 322, 74, 10, 89],
    backgroundColor: "#00327A",
  },
]

module.exports = {
  dashboardCardListDataMock,
  dashboardBarChartDataMock,
  dashboardLineChartDataMock,
}

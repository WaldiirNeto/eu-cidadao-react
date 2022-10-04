const { authDataMock } = require("./auth/auth-data")
const { userDataMock, checkUser } = require("./user/user")
const { listaOcorrenciaDataMock } = require("./ocorrencias/ocorrencias")
const {
  dashboardCardListDataMock,
  dashboardBarChartDataMock,
  dashboardLineChartDataMock,
} = require("./dashboard/dashboard")
module.exports = () => {
  return {
    authDataMock,
    userDataMock,
    checkUser,
    dashboardCardListDataMock,
    dashboardBarChartDataMock,
    dashboardLineChartDataMock,
    listaOcorrenciaDataMock,
  }
}

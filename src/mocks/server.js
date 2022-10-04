const JSON_SERVER = require("json-server")
const seed = require("./data.js")
const SERVER = JSON_SERVER.create()
const MIDDLEWARES = JSON_SERVER.defaults()
const data = seed()
const ROUTER = JSON_SERVER.router(data)
SERVER.use(JSON_SERVER.bodyParser)
SERVER.use(MIDDLEWARES)

SERVER.use((req, res, next) => {
  if (req.url === `/api/Autenticacao/Login`) {
    if (Object.keys(req.body).length > 0) {
      if (JSON.stringify(req.body) === JSON.stringify(data.checkUser)) {
        req.body = data.authDataMock
      } else {
        res.sendStatus(401)
      }
    }
  }
  next() // continue to JSON Server router
})
SERVER.use(
  JSON_SERVER.rewriter({
    "/api/Autenticacao/Login": "/authDataMock",
    "/api/Usuario": "/userDataMock",
    "/api/dashboard-cards": "/dashboardCardListDataMock",
    "/api/dashboard-barchart": "/dashboardBarChartDataMock",
    "/api/dashboard-linechart": "/dashboardLineChartDataMock",
    "/api/ocorrencias-lista:filter": "/listaOcorrenciaDataMock",
  })
)
SERVER.use(ROUTER)

SERVER.listen(3000, function () {
  console.log("http://localhost:3000")
})

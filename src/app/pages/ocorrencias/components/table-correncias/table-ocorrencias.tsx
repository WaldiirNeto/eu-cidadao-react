import { errorGlobal } from "app/global/error.global"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { useRecoilState, useResetRecoilState } from "recoil"
import { ocorrenciaListAtomState } from "../../atoms/ocorrencia.atom"
import { IOcorrenciaService } from "../../models/ocorrencias-service.interface"
import OcorrenciaStatusComponent from "../ocorrencia-status/ocorrencia-status"
import Pagination from "react-responsive-pagination"

interface Props {
  service: IOcorrenciaService
}
function TableOcorrencias({ service }: Props) {
  const resetdashboardState = useResetRecoilState(ocorrenciaListAtomState)
  const [state, setState] = useRecoilState(ocorrenciaListAtomState)
  const errorResponse = errorGlobal((error: any) => {
    setState(old => ({ ...old, error: error }))
  })

  useEffect(() => resetdashboardState(), [])
  useEffect(() => {
    service
      .ListOcorrencia({ _page: state._page, _limit: state._limit })
      .then(response => {
        const xTotalCount = parseInt(response.headers["x-total-count"])
        console.log(response.data)
        setState(objCurrent => ({
          ...objCurrent,
          loading: false,
          ocorrenciaList: response.data,
          totalCountPage: xTotalCount,
        }))
      })
      .catch(errorResponse)
  }, [state.currentPage])
  const reload = (value: number): void => {
    setState(objCurrent => ({
      ...objCurrent,
      loading: true,
      currentPage: value,
      _page: value,
    }))
  }
  return (
    <>
      {state.loading ? (
        <div className="text-center">
          <Spinner
            className="tex-center"
            animation="border"
            variant="primary"
          />
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Protocolo</th>
                <th scope="col">Assunto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Responsável</th>
                <th scope="col">Bairro</th>
                <th scope="col">Data de criação</th>
                <th scope="col" colSpan={2}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {state.ocorrenciaList.map(ocorrencia => {
                return (
                  <tr key={ocorrencia.protocolo_id}>
                    <th>#{ocorrencia.protocolo_id}</th>
                    <td>{ocorrencia.categoria}</td>
                    <td>{ocorrencia.subCategoria}</td>
                    <td>{ocorrencia.responsavel}</td>
                    <td>{ocorrencia.bairro}</td>
                    <td>
                      {new Date(ocorrencia.data_criacao).toLocaleDateString()}
                    </td>
                    <td>
                      <OcorrenciaStatusComponent status={ocorrencia.status} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <Pagination
              current={state.currentPage}
              total={Math.ceil(state.totalCountPage / state._limit)}
              onPageChange={reload}
            />
          </div>
        </>
      )}
    </>
  )
}

export default TableOcorrencias

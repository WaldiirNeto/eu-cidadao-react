import BoxComponent from "app/shared/components/box/box"
import { factoryOcorrenciaService } from "app/shared/factories/ocorrencia.factory"
import TableOcorrencias from "./components/table-correncias/table-ocorrencias"

function OcorrenciasComponent() {
  return (
    <BoxComponent>
      <TableOcorrencias service={factoryOcorrenciaService()} />
    </BoxComponent>
  )
}
export default OcorrenciasComponent

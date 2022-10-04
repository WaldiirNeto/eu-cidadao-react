import { useEffect } from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import { FieldValues, useForm } from "react-hook-form"
import { AuthParamsModel, ILoginService } from "./models"
import { useRecoilState, useResetRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { loginAtomState } from "./atoms/login.atom"
import { AlertAtomState } from "app/shared/atoms/alert.atom"

function LoginComponent(props: { service: ILoginService }) {
  const resetLoginState = useResetRecoilState(loginAtomState)
  const [state, setState] = useRecoilState(loginAtomState)
  const [alert, setAlertState] = useRecoilState(AlertAtomState)
  const router = useNavigate()

  useEffect(() => resetLoginState(), [])

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  })
  const autenticar = async (data: FieldValues) => {
    try {
      setState(objToUpdate => ({ ...objToUpdate, loading: true }))
      const resultRequest = await props.service.auth(data as AuthParamsModel)
      localStorage.setItem(`tokenEuCidadao`, resultRequest.data.access_token)
      router("/dashboard")
      setState(objToUpdate => ({ ...objToUpdate, loading: false }))
    } catch (error) {
      setState(objToUpdate => ({
        ...objToUpdate,
        loading: false,
        isError: true,
      }))
      setAlertState(obtToUpdate => ({
        ...obtToUpdate,
        type: `danger`,
        message: `Usuário não encontrado`,
        show: true,
      }))
    }
  }

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <div className="row mx-auto align-items-center">
        <div className="col-sm-6 mb-4">
          <img
            className="img-fluid"
            alt="login bg"
            src="/src/assets/images/login-bg.svg"
          ></img>
        </div>
        <div className="col-sm-4">
          <h2 className="text-center d-none d-lg-block">
            Entre com seu login e senha
          </h2>
          <Form onSubmit={handleSubmit(autenticar)} className="col-sm-12">
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                autoComplete="username"
                placeholder="Digite seu E-mail"
                {...register("username", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inputPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                autoComplete="current-password"
                placeholder="Digite sua Senha"
                {...register("password", { required: true })}
              />
            </Form.Group>
            <input
              type="hidden"
              {...register("client_id", { required: true })}
              value="backoffice"
            ></input>
            <Button
              className="w-100"
              variant="primary"
              type="submit"
              disabled={!formState.isValid}
            >
              {state.loading ? (
                <Spinner animation="border" variant="light" />
              ) : (
                "ENTRAR"
              )}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent

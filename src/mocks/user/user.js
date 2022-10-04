const userDataMock = {
  id: "f644d845-a00f-4dd2-8680-951a4b56602c",
  nomeCompleto: "Waldir Feitoza",
  primeiroNome: "Waldir",
  ultimoNome: "Feitoza",
  email: "nwalldir+admin@gmail.com",
  emailVerificado: true,
  cpf: "210.420.480-10",
  cidadeId: 2,
  dataNascimento: "1993-10-03T03:00:00+00:00",
  roles: [
    "ver_categorias",
    "remover_categoria",
    "adicionar_categoria",
    "editar_usuario",
    "editar_ocorrencia",
    "despachar_ocorrencia",
    "finalizar_ocorrencia",
    "ver_ocorrencia",
    "editar_categoria",
    "criar_usuario",
    "deletar_usuario",
  ],
  grupo: "administrador",
  celular: "11990565887",
  nomeCidade: "São Paulo",
}

const checkUser = {
  username: `nwalldir+admin@gmail.com`,
  password: `@Brasil123`,
  client_id: "backoffice",
}

module.exports = {
  userDataMock,
  checkUser,
}

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CadastroContainer,
  CadastroFormButton,
  CadastroFormButtonContainer,
  CadastroFormContainer,
  CadastroFormFirstButton,
  CadastroHeader,
} from "./cadastro.funcionario.styles";
function CadastroFuncionario() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setPassword] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [usertype, setUsertype] = useState("user_funcionario");

  const navigate = useNavigate();

  const json = {
    nome: nome,
    email: email,
    password: senha,
    especialidade: especialidade,
    user_type: usertype,
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/cadastroFuncionario", json)
      .then(() => {
        console.log("deu certo");
      })
      .catch(() => {
        console.log("deu erro");
      });
  };

  const handleBacktoMenu = () => {
    navigate("/home");
  };
  return (
    <CadastroContainer>
      <CadastroHeader>
        <img src="" alt="Em Andamento" />
        <p>
          Lorem ipsum dolor sit amet, nes as consectetur adipisicing Curabitur
          ut nisi iaculis.
        </p>
      </CadastroHeader>
      <CadastroFormContainer>
        <>
          <label htmlFor="cadastroNome">Nome</label>
          <div
            id="cadastroNome"
            style={{ position: "relative", height: "max-content" }}
          >
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <label htmlFor="cadastroEspecialidade">Especialidade</label>
          <div
            id="cadastroCPF"
            style={{ position: "relative", height: "max-content" }}
          >
            <input
              type="text"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
            />
          </div>

          <label htmlFor="cadastroEmail">Qual o seu e-mail?</label>
          <div
            id="cadastroEmail"
            style={{ position: "relative", height: "max-content" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label htmlFor="cadastrarSenha">Escolha uma senha :</label>
          <div
            id="cadastrarSenha"
            style={{ position: "relative", height: "max-content" }}
          >
            <input
              type="password"
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <CadastroFormButtonContainer>
            <CadastroFormButton onClick={handleBacktoMenu}>
              Voltar
            </CadastroFormButton>
            <CadastroFormButton
              disabled={nome && especialidade && email && senha ? false : true}
              buttonAdv
              onClick={handleSave}
            >
              Cadastrar
            </CadastroFormButton>
          </CadastroFormButtonContainer>
        </>
      </CadastroFormContainer>
    </CadastroContainer>
  );
}

export default CadastroFuncionario;

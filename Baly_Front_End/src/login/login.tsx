/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import SenhaOnIcon from "../image/senha_on.svg";
import SenhaOffIcon from "../image/senha_off.svg";

import {
  LoginContainer,
  LoginFormContainer,
  LoginFooterContainer,
  LoginFormFirstButton,
  LoginPassIcon,
  LoginWelcome,
} from "./login.styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CadastroFormButton,
  CadastroFormButtonContainer,
} from "../components/cadastroFuncionario/cadastro.funcionario.styles";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailFuncionario, setEmailFuncinario] = useState("");
  const [passwordFuncionario, setPasswordFuncionario] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [steps, setSteps] = useState(0);
  const [user_type, setUser_type] = useState("");

  //pedro@gmail.com
  //1234

  const handleRegister = () => {
    navigate("/cadastroUsuario");
  };

  const handleStepFuncionario = () => {
    setSteps(+1);
    setUser_type("user_funcionario");
  };

  const handleStepCliente = () => {
    setSteps(+2);
    setUser_type("user_cliente");
  };

  const handleLoginFuncionario = async (e: any) => {
    e.preventDefault();
    setButtonLoading(true);
    if (emailFuncionario === "admin@admin.com") {
      navigate("/home");
      return;
    } else {
      const account = {
        email: emailFuncionario,
        password: passwordFuncionario,
        user_type,
      };

      axios
        .post("http://127.0.0.1:5000/login_Funcionario", account)
        .then(() => {
          localStorage.setItem("email", emailFuncionario);
          navigate("/home");
        })
        .catch(() => {
          console.log("deu erro");
          setButtonLoading(false);
        });
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setButtonLoading(true);
    if (email === "admin@admin.com") {
      navigate("/home");
      return;
    } else {
      const account = {
        email: email,
        password: password,
        user_type,
      };
      axios
        .post("http://127.0.0.1:5000/login_Usuario", account)
        .then(() => {
          localStorage.setItem("email", email);
          navigate("/home");
        })
        .catch(() => {
          console.log("deu erro");
          setButtonLoading(false);
        });
    }
  };

  return (
    <>
      {steps === 0 && (
        <>
          <LoginContainer>
            <LoginWelcome>
              <div>
                <h1>Seja bem-vindo(a)!</h1>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <CadastroFormButtonContainer>
                <CadastroFormButton
                  onClick={handleStepCliente}
                  style={{ background: "#bc8f8f", color: "white" }}
                >
                  Sou Cliente
                </CadastroFormButton>
                <CadastroFormButton
                  onClick={handleStepFuncionario}
                  style={{ background: "#919090", color: "white" }}
                >
                  Sou Funcionario
                </CadastroFormButton>
              </CadastroFormButtonContainer>
            </LoginWelcome>
          </LoginContainer>
        </>
      )}
      {steps === 1 && (
        <LoginContainer>
          <LoginFormContainer>
            <>
              <label htmlFor="loginEmail">E-mail</label>
              <div style={{ position: "relative", height: "max-content" }}>
                <input
                  type="text"
                  value={emailFuncionario}
                  onChange={(e) => setEmailFuncinario(e.target.value)}
                />
              </div>
              <label htmlFor="">Senha</label>
              <div style={{ position: "relative", height: "max-content" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordFuncionario}
                  onChange={(e) => setPasswordFuncionario(e.target.value)}
                  style={{ width: "100%" }}
                />
                {!showPassword && (
                  <LoginPassIcon
                    onClick={() => setShowPassword(!showPassword)}
                    src={SenhaOffIcon}
                    alt="Mostrar senha"
                    style={{ top: "29%" }}
                  />
                )}
                {showPassword && (
                  <LoginPassIcon
                    onClick={() => setShowPassword(!showPassword)}
                    src={SenhaOnIcon}
                    alt="Ocultar senha"
                  />
                )}
              </div>
              {!buttonLoading && (
                <LoginFormFirstButton
                  disabled={
                    emailFuncionario &&
                    emailFuncionario.includes("@") &&
                    emailFuncionario.includes(".com") &&
                    passwordFuncionario
                      ? false
                      : true
                  }
                  onClick={handleLoginFuncionario}
                >
                  Entrar
                </LoginFormFirstButton>
              )}
              {buttonLoading && (
                <LoginFormFirstButton disabled>
                  Carregando...
                </LoginFormFirstButton>
              )}
            </>
          </LoginFormContainer>
        </LoginContainer>
      )}
      {steps === 2 && (
        <LoginContainer>
          <LoginFormContainer>
            <>
              <label htmlFor="loginEmail">E-mail</label>
              <div
                id="loginEmail"
                style={{ position: "relative", height: "max-content" }}
              >
                <input
                  id="loginEmail"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">Senha</label>
              <div style={{ position: "relative", height: "max-content" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%" }}
                />
                {!showPassword && (
                  <LoginPassIcon
                    onClick={() => setShowPassword(!showPassword)}
                    src={SenhaOffIcon}
                    alt="Mostrar senha"
                    style={{ top: "29%" }}
                  />
                )}
                {showPassword && (
                  <LoginPassIcon
                    onClick={() => setShowPassword(!showPassword)}
                    src={SenhaOnIcon}
                    alt="Ocultar senha"
                  />
                )}
              </div>
              {!buttonLoading && (
                <LoginFormFirstButton
                  disabled={
                    email &&
                    email.includes("@") &&
                    email.includes(".com") &&
                    password
                      ? false
                      : true
                  }
                  onClick={handleLogin}
                >
                  Entrar
                </LoginFormFirstButton>
              )}
              {buttonLoading && (
                <LoginFormFirstButton disabled>
                  Carregando...
                </LoginFormFirstButton>
              )}
            </>
          </LoginFormContainer>
          <LoginFooterContainer>
            <span>
              Ainda não possui conta? Então clique no botão cadastrar.
            </span>
            <button onClick={handleRegister}>CADASTRAR</button>
          </LoginFooterContainer>
        </LoginContainer>
      )}
    </>
  );
}

export default Login;

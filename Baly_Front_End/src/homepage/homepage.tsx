import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Agendar from "../components/agendaFuncionario/agenda";
import Dialog from "../components/modal/dialog.component";
import { SideMenuOpened, SideMenuOpenedOptions } from "../login/login.styles";
import TopBar from "../top-bar/top-bar.component";
import Usuario from "../components/usuario/usuario-component";

function Homepage() {
  const [showDialog, setShowDialog] = useState(false);
  const [data, setData] = useState("");

  const procurarDados = async (param: any) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/usuarios/${param}`
      );

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const receberDados = async () => {
    var usuario = localStorage.getItem("email");

    const response = await procurarDados(usuario);

    if (response) {
      console.log(response.data);
      setData(response.data);
    } else {
      console.log("error");
    }
  };
  const AbrirDialog = () => {
    setShowDialog(true);
  };
  useEffect(() => {
    receberDados();
  }, [data]);
  return (
    <>
      <TopBar />

      <Dialog
        id="txt"
        size="30%"
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        title="Agendamento"
      >
        <Agendar modal={setShowDialog} />
      </Dialog>

      <>
        {data === "admin@admin.com" && (
          <SideMenuOpened>
            <SideMenuOpenedOptions>
              <Link to="/cadastrarFuncionario">
                <li style={{}}>
                  <p>Cadastrar Funcionario</p>
                </li>
              </Link>
              <Link onClick={AbrirDialog} to={""}>
                <li style={{}}>
                  <p>Realizar Agendamento</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <p>TODO</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <p>TODO</p>
                </li>
              </Link>
              <Link to="/home">
                <li style={{}}>
                  <p>TODO</p>
                </li>
              </Link>
            </SideMenuOpenedOptions>
          </SideMenuOpened>
        )}{" "}
        {data === "user_funcionario" && (
          <>
            <SideMenuOpened>
              <SideMenuOpenedOptions>
                <Link onClick={AbrirDialog} to={""}>
                  <li style={{}}>
                    <p>SUA AGENDA</p>
                  </li>
                </Link>
                <Link to="/home">
                  <li style={{}}>
                    <p>TODO</p>
                  </li>
                </Link>
              </SideMenuOpenedOptions>
            </SideMenuOpened>
          </>
        )}
        {data === "user_cliente" && (
          <>
            <Usuario />
          </>
        )}
      </>
    </>
  );
}
export default Homepage;

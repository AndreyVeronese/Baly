import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons, Container, Spans } from "./styles";
import React from "react";

type Card = {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  subDescription: string;
  value: string;
};

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [auth, setAuth] = useState("");
  const [cardList, setCardList] = useState<Card[]>([]);
  const [teste, setTeste] = useState("");

  const navigate = useNavigate();

  /* useEffect(() => {
    const user: any = sessionStorage.getItem("auth");
    console.log(user);
    if (user) {
      setAuth(JSON.parse(user));
    }
  }, []); */

  useEffect(() => {
    const Usuario = localStorage.getItem("email");
    if (Usuario) {
      setAuth(Usuario);
    }
  });

  const signOut = () => {
    localStorage.removeItem("email");
    navigate("/login");
    //setAuth(null);
  };

  return (
    <>
      <Container>
        {auth && (
          <>
            <Spans>Bem vindo(a), {auth} </Spans>
            <Buttons onClick={signOut}>Sair</Buttons>
          </>
        )}
      </Container>
    </>
  );
}

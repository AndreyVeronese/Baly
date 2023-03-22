import styled, { createGlobalStyle } from "styled-components";

interface PropsType {
  content: number;
}

export const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Inter, sans-serif;
      color: #757575;
   }

   span {
     font-size: 0.9rem;
   }

   button {
      font-size: 0.9rem;
   }

   h1 {
      font-size: 1.6rem;
   }

   h2 {
      font-size: 1.3rem;
   }

   label {
      font-size: 0.9rem;
   }

   p {
      font-size: 0.9rem;
   }
`;

export const App = styled.div`
  display: flex;
`;

export const AppContainer = styled.div`
  background: #f5f5f5;
  z-index: 0;
  width: 100vw;
`;

export const AppPageContainer = styled.div<PropsType>`
  margin-left: 2rem;
  overflow-y: scroll;
  height: calc(100vh - 6rem);
  padding-top: 1rem;
  width: ${(props) =>
    props.content ? "calc(100vw - 14rem)" : "calc(100vw - 6.4rem)"};
  /* transition: all 0.5s ease-in-out; */
  position: relative;
`;

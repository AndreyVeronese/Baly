import styled from "styled-components";

interface CadastroFormStepsItemType {
   active: boolean;
}

interface CadastroFormButtonType {
   buttonAdv?: boolean;
}

export const CadastroContainer = styled.div`
   background: linear-gradient(#bc8f8f 57.5%, #fff 43.5%);
   height: 100vh;
   display: flex;
   flex-direction: column;
`;

export const CadastroHeader = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding: 2rem;
   color: white;

   p {
      font-size: 1.8rem;
      width: 35%;
      font-weight: bold;
   }
`;

export const CadastroFormContainer = styled.div`
   width: calc(39% - 3.5rem);
   background: white;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   padding: 3.5rem;
   box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
   margin: 0 auto;

   h3 {
      span {
         font-size: 1.17rem;
         color: #008787;
      }
   }

   label {
      color: gray;
      margin-top: 1.6rem;
      margin-bottom: 0.4rem;
   }

   input[type="text"],
   [type="password"],
   [type="email"],
   [type="number"],
   select {
      background: #f5f5f5;
      border: none;
      border-radius: 10px;
      height: 3.4rem;
      outline: none;
      padding: 0 0.8rem;
      color: #5f5f5f;
      width: 100%;

      &:focus {
         box-shadow: 0 0 5px #a2a2a2;
      }
   }

   /* button {
      outline: none;
      border: none;
      height: 5.5rem;
      background: #4ed1d1;
      margin-top: 1rem;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: bold;

      &:disabled {
         background: #ccc;
      }
   } */

   div {
      display: flex;
      justify-content: center;
      align-items: center;
      /* height: 20%; */

      span {
         font-weight: bold;
         color: gray;
         margin: 0 0.3rem;
      }

      a {
         color: gray;
      }
   }
`;

export const CadastroFormButtonContainer = styled.div`
   display: flex !important;
   justify-content: space-between !important;
`;

export const CadastroFormFirstButton = styled.button`
   outline: none;
   border: none;
   height: 4.3rem;
   background: #b49797;
   margin-top: 1rem;
   border-radius: 10px;
   color: white;
   cursor: pointer;
   font-size: 1.2rem;
   font-weight: bold;
   margin-top: 1.6rem;

   &:disabled {
      background: #ccc;
      cursor: not-allowed;
   }
`;

export const CadastroFormButton = styled.button<CadastroFormButtonType>`
   outline: none;
   border: ${(props) => (props.buttonAdv ? "none" : "1px solid #cccccc")};
   height: 4.3rem;
   background: ${(props) => (props.buttonAdv ? "#b49797" : "#ffffff")};
   margin-top: 1rem;
   border-radius: 10px;
   color: ${(props) => (props.buttonAdv ? "#ffffff" : "#cccccc")};
   cursor: pointer;
   font-size: 1.2rem;
   font-weight: bold;
   width: 48%;
   margin-top: 1.6rem;

   &:disabled {
      background: #ccc;
      cursor: not-allowed;
   }
`;

export const CadastroFormStepsContainer = styled.div`
   height: 3rem;
`;

export const CadastroFormStepsItem = styled.div<CadastroFormStepsItemType>`
   width: 3rem;
   height: 3rem !important;
   border-radius: 50%;
   background: ${(props) => (props.active ? "#4ed1d1" : "#ffffff")};
   border: ${(props) => (props.active ? "none" : "1px solid #ccc")};

   span {
      color: ${(props) => (props.active ? "#fff!important" : "#ccc!important")};
   }
`;

export const CadastroFormStepsLine = styled.div<CadastroFormStepsItemType>`
   width: 6rem;
   height: 1.5px !important;
   background: ${(props) => (props.active ? "#4ed1d1" : "#ccc")};
`;

export const CadastroFooterContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 2rem 0;
   padding-bottom: 4.4rem;

   span {
      margin-right: 0.2rem;
   }

   a {
      margin-left: 0.2rem;
      background: #367bb9;
      outline: none;
      border-radius: 2rem;
      height: 2.5rem;
      font-size: 0.8rem;
      cursor: pointer;
      width: 10rem;
      border: none;
      color: white;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;
export const FileUpload = styled.div`
   border-radius: 11px;
   border: 1px solid #ccc;
   display: inline-block;
   padding: 6px 12px;
   cursor: pointer;
   justify-content: start;
`;

export const CheckBoxTeste = styled.div`
   &&& {
      display: block;
      text-align: left;
   }
`;

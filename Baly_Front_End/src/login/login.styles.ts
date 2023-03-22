import styled from "styled-components";

interface LoginFormButtonType {
  buttonAdv: boolean;
}

export const LoginContainer = styled.div`
  background: linear-gradient(#bc8f8f 57.5%, #fff 43.5%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginLogo = styled.img`
  height: 2.5rem;
  margin-bottom: 2rem;
`;

export const LoginFormContainer = styled.div`
  width: calc(30% - 3.3rem);
  height: calc(70% - 3.3rem);
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 3.3rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  label {
    color: gray;
    margin-top: 1.4rem;
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
  }

  input {
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

  button {
    /* outline: none;
      border: none;
      height: 4rem;
      background: #4ed1d1;
      margin-top: 1rem;
      border-radius: 10px;
      color: white;
      cursor: pointer;

      &:disabled {
         background: #ccc;
      } */
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;

    span {
      font-weight: bold;
      color: gray;
      margin: 0 0.3rem;
      font-size: 0.9rem;
    }

    a {
      color: gray;
      font-size: 0.95rem;
    }
  }
`;
export const LoginWelcome = styled.div`
  width: calc(30% - 3.3rem);
  height: calc(70% - 3.3rem);
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 3.3rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-size: 1.2rem;

    a {
      color: gray;
      font-size: 0.95rem;
    }

    h1 {
      color: gray;
    }
  }
`;
export const LoginFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 0.9rem;

  span {
    margin-right: 0.2rem;
  }

  button {
    margin-left: 0.2rem;
    background: #946565;
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

export const LoginFormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  position: relative;
`;

export const LoginFormFirstButton = styled.button`
  outline: none;
  border: none;
  height: 4.5rem;
  background: #bc8f8f;
  margin-top: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  cursor: pointer;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #946565 radial-gradient(circle, transparent 1%, #946565 1%)
      center/15000%;
  }

  &:active {
    background-color: #946565;
    background-size: 100%;
    transition: background 0s;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const LoginFormButton = styled.button<LoginFormButtonType>`
  outline: none;
  border: ${(props) => (props.buttonAdv ? "none" : "1px solid #cccccc")};
  height: 4rem;
  background: ${(props) => (props.buttonAdv ? "#4ed1d1" : "#ffffff")};
  margin-top: 1rem;
  border-radius: 10px;
  color: ${(props) => (props.buttonAdv ? "#ffffff" : "#cccccc")};
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bold;
  width: 48%;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #946565 radial-gradient(circle, transparent 1%, #946565 1%)
      center/15000%;
  }

  &:active {
    background-color: #946565;
    background-size: 100%;
    transition: background 0s;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const LoginPassIcon = styled.img`
  position: absolute;
  top: 34%;
  left: 90%;
  width: 1.8rem;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.92);
  }
`;

export const LoginErrorMessage = styled.small`
  color: #fa6674;
  position: absolute;
  top: 4rem;
  left: 2%;
  visibility: hidden;
`;

export const SideMenuOpened = styled.div`
  width: 13.75rem;
  background: #bc8f8f;
  transition: all 0.5s ease-in-out;
  height: 100vh;
`;

export const SideMenuOpenedLogo = styled.div`
  width: 80%;
  height: 47px;
  margin: 1.5rem auto;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const SideMenuOpenedOptions = styled.ul`
  padding: 0;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      padding: 9.2px 0;
      text-align: left;
      width: 100%;
      display: flex;
      height: 2.5rem;
      align-items: center;
      cursor: pointer;
      margin-left: 1.5rem;
      transition: all 0.3s;

      &:hover {
        background: #a28a8a;
        width: 90%;
        margin: 0 auto;
        border-radius: 0.7rem;

        & a {
          font-weight: bold;
        }

        p {
          color: white;
        }
      }

      img {
        height: 1.4rem;
        margin-right: 0.6rem;
      }

      svg {
        margin-right: 0.4rem;
      }
    }
  }
`;

export const SideMenuClosed = styled.div`
  width: 4.375rem;
  height: 100vh;
  background: #4ed1d1;
  transition: all 0.5s ease-in-out;
  text-align: center;
`;

export const SideMenuClosedLogo = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 70px;
  position: relative;
  cursor: pointer;
`;

export const SideMenuClosedOptions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 0.8rem;

  li {
    padding: 15px 0;
    width: 100%;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.3s;

    &:hover {
      background: #41aaaa;
      border-radius: 0.7rem;
      transition: all 0.3s;
      width: 80%;

      & a {
        font-weight: bold;
      }

      & > .material-icons {
        color: white;
      }
    }

    img {
      height: 1.4rem;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    &:last-child {
      border: none;
    }

    p {
      display: none;
      margin: auto;
      color: teal;
      font-size: 14px;
      font-weight: 300;
      position: absolute;
      padding-left: 30px;
      line-height: 30px;
    }
  }
`;

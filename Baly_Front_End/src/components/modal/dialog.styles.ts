import styled from "styled-components";

interface DialogContainerType {
  opened: boolean;
}

interface DialogContentType {
  opened: boolean;
}

export const DialogInputClose = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const DialogContainer = styled.div<DialogContainerType>`
  opacity: ${(props) => (props.opened ? "1" : "0")};
  visibility: ${(props) => (props.opened ? "visible" : "hidden")};
  display: ${(props) => (props.opened ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  transition: all 0.25s ease;
  z-index: ${(props) => (props.opened ? "1" : "0")};
`;

export const DialogLabelClose = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
`;

export const DialogContent = styled.div<DialogContentType>`
  transition: top 0.25s ease;
  position: absolute;
  top: ${(props) => (props.opened ? "0" : "-20%")};
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 20px;
  padding: 1em 2em;
  height: max-content;
  max-height: 90%;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
    box-sizing: border-box;
  }

  h2 {
    text-align: center;
  }
`;

export const DialogCloseButton = styled.label`
  position: absolute;
  right: 1.5rem;
  top: 1.1rem;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover::before,
  &:hover::after {
    filter: brightness(0.75);
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 1.5em;
    background: #ccc;
    display: block;
    transform: rotate(45deg);
    left: 50%;
    margin: -3px 0 0 -1px;
    top: 0;
    z-index: 1;
  }

  &::before {
    transform: rotate(-45deg);
  }
`;

//  .modal-state:checked + .modal {
//    opacity: 1;
//    visibility: visible;
//    z-index: 1;
//  }

//  .modal-state:checked + .modal .modal__inner {
//    top: 0;
//  }

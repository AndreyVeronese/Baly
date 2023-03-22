import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  justify-content: right;
  margin: 0 6rem;
  width: calc(100vw - 9rem);
`;
export const Spans = styled.span`
  margin-left: 1rem;
  color: black;
`;
export const Buttons = styled.button`
  width: 7rem;
  height: 2rem;
  padding: 4px;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: white;
  border-style: hidden;
  margin: 0 10px;
  background: #946565;
  transform: scale(1.04);
`;

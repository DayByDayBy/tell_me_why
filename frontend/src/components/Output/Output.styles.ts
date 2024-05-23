import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 1rem 3rem;
  padding: 1rem;
  max-width: 60vh;
  height: 35vh;
  color: #000;
  border-width: 1px solid #8b8c74;
  border-radius: 2rem;
  background-color: #f9f9f9;
  overflow: scroll;
`;

export const LoadingP = styled.p`
  margin: 1rem 0;
  animation: ${fadeOut} 3500ms forwards;
`;

export const ResponseP = styled.p`
  animation: ${fadeIn} 1000ms linear;
`;

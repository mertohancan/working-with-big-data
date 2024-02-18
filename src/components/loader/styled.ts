
import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div<{size: string}>`
  display: inline-block;
  width: ${(props: { size: string }) => props.size};
  height: ${(props: { size: string }) => props.size};
  position: relative;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  animation: ${spin} 1s linear infinite;
`;

export const CenteredLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Sayfanın tamamını kapla */
`;

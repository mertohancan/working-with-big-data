import styled from "styled-components";

export const BasketContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 450px;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Items = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow-y: auto;
`;

export const Item = styled.div`
dislay: flex;
flex-direction: row;
padding: 5px;
border-bottom: 1px solid black;
`;
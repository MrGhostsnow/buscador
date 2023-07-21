import styled from "styled-components";

export const ContainerServices = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  width: 80%;
  min-height: 500px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export const ListOfServices = styled.ul`
  color: #000;
  border-bottom: 1px solid #000;
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const Service = styled.li`
  list-style: none;
  width: 200px;
  display: flex;
  justify-content: center;
`;

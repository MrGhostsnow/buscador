import styled from "styled-components";

export const ContainerServices = styled.div`
  border: 1px solid red;
  width: 80%;
  height: 500px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListOfServices = styled.ul`
  color: #000;
  border: 1px solid red;
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const Service = styled.li`
  list-style: none;
`;

export const SectionInput = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 60%;
  height: 30px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #000;
`;

export const Button = styled.button`
  background-color: #000;
  color: #dcdcdc;
  font-weight: 500;
  font-size: 1rem;
  width: 130px;
  height: 38px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

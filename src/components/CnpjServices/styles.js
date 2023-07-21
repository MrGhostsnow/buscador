"use client";
import styled from "styled-components";

export const SectionInput = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: #000;
  padding-left: 0.5rem;
  font-weight: bold;
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

export const ContainerInfosCnpj = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  width: 600px;
  gap: 1rem;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 1rem;
`;

export const StateInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CityInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NeighborhoodInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StreetInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: #000;
  font-weight: bold;
`;

export const Info = styled.span`
  color: #000;
  width: 180px;
`;

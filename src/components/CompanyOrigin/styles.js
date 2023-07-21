"use client";
import styled from "styled-components";

export const ContainerCompanyOrigin = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1631557777127-6495c07ba6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80");
  background-position: 55% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  opacity: 0.8;
`;

export const TextContainer = styled.p`
  position: absolute;
  color: #000;
  width: 650px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  @media screen and (max-width: 572px) {
    width: 380px;
  }
`;

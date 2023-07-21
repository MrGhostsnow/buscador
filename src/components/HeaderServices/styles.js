"use client";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const SectionBackground = styled.div`
  background-image: url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
  background-position: 55% 65%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  opacity: 0.8;
`;

export const SectionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  position: absolute;
  top: 12rem;
  width: 350px;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
`;

export const TitlePage = styled.p`
  color: #000;
`;

export const ButtonServices = styled.button`
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

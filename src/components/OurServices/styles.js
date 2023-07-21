"use client";
import styled from "styled-components";

export const ContainerOurServices = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1024px) {
    height: 800px;
  }
`;

export const TitleOurServices = styled.h1`
  color: #000;
  @media screen and (max-width: 1024px) {
    margin-top: -15rem;
  }
`;

export const ContainerTextServices = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 170px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 15rem;
    gap: 2rem;
  }
`;

export const SectionServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 1rem;
`;

export const TitleSection = styled.h3`
  color: #000;
`;

export const TextSection = styled.p`
  color: #000;
  width: 50%;
  height: 150px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 572px) {
    width: 300px;
  }
`;

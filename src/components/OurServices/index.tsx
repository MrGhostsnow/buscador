"use client";
import {
  ContainerOurServices,
  TitleOurServices,
  ContainerTextServices,
  SectionServices,
  TitleSection,
  TextSection,
} from "./styles";

const OurServices = () => (
  <ContainerOurServices>
    <TitleOurServices>Nossos serviços</TitleOurServices>
    <ContainerTextServices>
      <SectionServices>
        <TitleSection>Lorem</TitleSection>
        <TextSection>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
          reprehenderit esse saepe fugit quibusdam beatae doloribus pariatur
          asperiores cupiditate similique nobis iure animi dicta architecto
          maxime itaque. Pariatur, aut ullam?
        </TextSection>
      </SectionServices>
      <SectionServices>
        <TitleSection>Lorem</TitleSection>
        <TextSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          itaque harum sit quidem iste dolor nulla provident similique quibusdam
          pariatur amet, sapiente, laborum quia reprehenderit aperiam quos
          delectus aliquid cumque!
        </TextSection>
      </SectionServices>
      <SectionServices>
        <TitleSection>Lorem</TitleSection>
        <TextSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores
          officia, molestias aliquam temporibus ab vero totam at ullam expedita
          iste optio delectus nisi molestiae in, rem ut dignissimos earum.
        </TextSection>
      </SectionServices>
    </ContainerTextServices>
  </ContainerOurServices>
);

export default OurServices;

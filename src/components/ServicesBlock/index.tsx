"use client";
import {
  ContainerServices,
  ListOfServices,
  Service,
  SectionInput,
  Input,
  Button,
} from "./styles";

const ServicesBlock = () => (
  <ContainerServices>
    <ListOfServices>
      <Service>UM</Service>
      <Service>DOIS</Service>
      <Service>TRES</Service>
    </ListOfServices>
    <SectionInput>
      <Input type="text" />
      <Button type="submit">Pesquisar</Button>
    </SectionInput>
  </ContainerServices>
);

export default ServicesBlock;

"use client";

import { LoginForm } from "@/presentation/components/forms/login";
import { Container, ContainerForm, SubTitle, Title, TitleArea } from "./styles";

export function LoginPage() {
  return (
    <Container>
      <ContainerForm>
        <TitleArea>
          <Title>Faça login na sua conta</Title>
          <SubTitle>Bem vindo de volta</SubTitle>
        </TitleArea>

        <LoginForm />
      </ContainerForm>
    </Container>
  );
}

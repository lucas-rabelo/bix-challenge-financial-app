"use client";

import { LoginForm } from "@/presentation/components/forms/login";
import { Container, ContainerForm, SubTitle, Title, TitleArea } from "./styles";

export function LoginPage() {
  return (
    <Container>
      <ContainerForm>
        <TitleArea>
          <Title>Log in to your account</Title>
          <SubTitle>Welcome back</SubTitle>
        </TitleArea>

        <LoginForm />
      </ContainerForm>
    </Container>
  );
}

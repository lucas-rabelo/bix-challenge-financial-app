"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from '@/presentation/hooks/use-auth';
import { Button } from "../../button";
import { InputControlled } from "../../input-controlled";
import { loginFormZodSchema } from "./schema";
import { Form } from "./styles";
import type { LoginFormProps, LoginFormSchema } from "./types";
import { useRouter } from "next/navigation";

export function LoginForm({}: LoginFormProps) {
  const { login, session } = useAuth()
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, handleSubmit, trigger, formState: { errors } } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormZodSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
    }
  }, [session]);


  function handleOnLogin({ email, password }: LoginFormSchema) {
    trigger()

    setIsLoading(true);
    login(email, password);
  }

  return (
    <Form onSubmit={handleSubmit(handleOnLogin)}>
      <InputControlled<LoginFormSchema>
        label="Email"
        control={control}
        name="email"
        type="email"
        errorMessage={errors.email?.message}
        />
      <InputControlled<LoginFormSchema>
        label="Password"
        control={control}
        name="password"
        type="password"
        errorMessage={errors.password?.message}
      />
      <Button type="submit" label="Confirm" loading={isLoading} />
    </Form>
  );
}

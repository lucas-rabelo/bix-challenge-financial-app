"use client";

import { AuthGuard } from "@/presentation/guards/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
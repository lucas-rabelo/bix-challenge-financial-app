"use client";

import { useAuth } from "@/presentation/hooks/use-auth";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace("/login");
    }
  }, [loading, session]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!session) return null;

  return <>{children}</>;
}

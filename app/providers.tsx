"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }));

  // tRPC temporarily disabled until backend is set up
  // Will be re-enabled when backend router types are available
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

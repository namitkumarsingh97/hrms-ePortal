"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/utils/trpc";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }));
  
  const [trpcClient] = useState(() => {
    try {
      return trpc.createClient({
        links: [
          httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/trpc`,
            headers: async () => {
              // Add auth headers here if needed (Clerk token)
              return {};
            },
          }),
        ],
      });
    } catch (error) {
      // Fallback if tRPC setup fails
      console.warn("tRPC client setup failed, using fallback:", error);
      return null;
    }
  });

  // If tRPC client failed to initialize, just use React Query
  if (!trpcClient) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

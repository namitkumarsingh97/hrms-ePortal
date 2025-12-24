import { createTRPCReact } from "@trpc/react-query";

// Temporary type definition until backend is fully set up
// Replace this with: import type { AppRouter } from "../../hrms-backend/src/trpc/trpc.router";
type AppRouter = any;

export const trpc = createTRPCReact<AppRouter>();


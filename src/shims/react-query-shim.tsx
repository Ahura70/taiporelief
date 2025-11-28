import * as React from "react";

// Minimal shim for @tanstack/react-query to avoid runtime hook errors.
// We don’t actually use react-query now, but some built chunks may still import it.

export class QueryClient {}

interface QueryClientProviderProps {
  client: QueryClient;
  children: React.ReactNode;
}

export const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => {
  // No hooks here on purpose – just render children directly.
  return <>{children}</>;
};

// No-op hooks to satisfy any stray imports without using React hooks.
export function useQuery(): never {
  throw new Error("react-query is disabled in this build");
}

export function useMutation(): never {
  throw new Error("react-query is disabled in this build");
}

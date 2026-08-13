import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { isServer } from "@tanstack/router-core/isServer";
import { routeTree } from "./routeTree.gen";

async function getRequestNonce(): Promise<string | undefined> {
  if (!isServer) return undefined;
  const { getStartContext } = await import("@tanstack/start-storage-context");
  const ctx = getStartContext({ throwIfNotFound: false });
  return (ctx?.contextAfterGlobalMiddlewares as { nonce?: string } | undefined)?.nonce;
}

export const getRouter = async () => {
  const queryClient = new QueryClient();
  const nonce = await getRequestNonce();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    ssr: { nonce },
  });

  return router;
};

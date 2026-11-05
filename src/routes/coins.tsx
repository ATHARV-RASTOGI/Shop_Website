// src/routes/coins.tsx
// Parent route for /coins and its subroutes (/coins/gold, /coins/silver)

import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/coins")({
  component: () => <Outlet />,
});

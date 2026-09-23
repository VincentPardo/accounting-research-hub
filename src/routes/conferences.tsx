import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/conferences")({
  component: ConferencesLayout,
});

function ConferencesLayout() {
  return <Outlet />;
}

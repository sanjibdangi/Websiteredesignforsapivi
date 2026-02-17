import { Outlet } from "react-router";
import { ModernNavigation } from "./ModernNavigation";
import { ModernFooter } from "./ModernFooter";

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavigation />
      <main>
        <Outlet />
      </main>
      <ModernFooter />
    </div>
  );
}
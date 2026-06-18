import { Outlet } from "react-router-dom";
import { HeaderNavegacao } from "../components/HeaderNavegacao/HeaderNavegacao";

export function MainLayout() {
  return (
    <div>
      <HeaderNavegacao />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

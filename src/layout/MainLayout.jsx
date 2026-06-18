import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <header>CardMaster (header placeholder — replaced by HeaderNavegacao in Task 7)</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

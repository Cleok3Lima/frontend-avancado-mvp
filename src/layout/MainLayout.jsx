import { Outlet } from "react-router-dom";
import { NavigationHeader } from "../components/NavigationHeader/NavigationHeader";

export function MainLayout() {
  return (
    <div>
      <NavigationHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

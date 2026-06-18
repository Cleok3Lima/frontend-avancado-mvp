import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";
import { StudyMode } from "../pages/StudyMode/StudyMode";
import { AllCards } from "../pages/AllCards/AllCards";
import { NotFound } from "../pages/NotFound/NotFound";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/study/:categoryId" element={<StudyMode />} />
        <Route path="/cards/:categoryId" element={<AllCards />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

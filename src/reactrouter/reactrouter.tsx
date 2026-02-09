import { Routes, Route } from "react-router-dom";
import Today from "../pages/Today";
import ByDate from "../pages/ByDate";
import Since from "../pages/Since";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Today />} />
    <Route path="/by-date" element={<ByDate />} />
    <Route path="/since" element={<Since />} />
  </Routes>
);

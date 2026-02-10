import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Today } from "./pages/today";
import { ByDate } from "./pages/bydate";
import { Since } from "./pages/since";
import { Header } from "./komponenter/header/header";
import { NavBar } from "./komponenter/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/by-date" element={<ByDate />} />
          <Route path="/since" element={<Since />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

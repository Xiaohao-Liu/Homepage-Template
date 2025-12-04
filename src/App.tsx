import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PubPage from "@/pages/pub";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PubPage />} path="/pub" />
    </Routes>
  );
}

export default App;

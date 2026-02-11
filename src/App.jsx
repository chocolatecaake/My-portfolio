import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/NotFound";
import Jan from "./components/Project pages/Jan";
import Landing from "./components/Project pages/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/projects/jan" element={<Jan />} />
          <Route path="/projects/landingDesign" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

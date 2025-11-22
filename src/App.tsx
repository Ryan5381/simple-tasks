import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Homepage = lazy(() => import("./views/Homepage"));
function App() {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;

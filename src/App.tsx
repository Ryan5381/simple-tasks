import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Homepage = lazy(() => import("./views/Homepage"));
const AuthPage = lazy(() => import("./views/AuthPage"));
const TasksPage = lazy(() => import("./views/TasksPage"));
function App() {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/task" element={<TasksPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;

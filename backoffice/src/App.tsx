import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
    </BrowserRouter>
  );
};

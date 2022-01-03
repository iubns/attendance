import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/admin";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Admin" element={<AdminPage />} />
      </Routes>
  );
}

export default App;

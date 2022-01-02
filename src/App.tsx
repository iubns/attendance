import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import AdminPage from "./pages/admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Upload from "./components/Upload";
import ChatHistory from "./components/ChatHistory";
import Account from "./components/Account";
import "./styles/dashboard.css"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/upload" element={<Upload />} />
      <Route path="/chat-history" element={<ChatHistory />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
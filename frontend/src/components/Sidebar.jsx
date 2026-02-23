import "./Home.css";

function Sidebar({ activeSection, setActiveSection, handleLogout }) {
  return (
    <div className="sidebar">
      <h3 className="logo">AI-KYC</h3>

      <button
        className={`side-btn ${activeSection === "ocr" ? "active" : ""}`}
        onClick={() => setActiveSection("ocr")}
      >
        OCR Dashboard
      </button>

      <button
        className={`side-btn ${activeSection === "account" ? "active" : ""}`}
        onClick={() => setActiveSection("account")}
      >
        Account Management
      </button>

      <button
        className={`side-btn ${activeSection === "chat" ? "active" : ""}`}
        onClick={() => setActiveSection("chat")}
      >
        Chat History
      </button>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
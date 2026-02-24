function Sidebar({ activeSection, setActiveSection, handleLogout }) {
  return (
    <div className="sidebar">
      <h3 className="logo">AI-KYC</h3>

      <div
        className={`menu-item ${activeSection === "ocr" ? "active" : ""}`}
        onClick={() => setActiveSection("ocr")}
      >
        OCR Upload
      </div>

      <div
        className={`menu-item ${activeSection === "account" ? "active" : ""}`}
        onClick={() => setActiveSection("account")}
      >
        Account Management
      </div>

      <div
        className={`menu-item ${activeSection === "chat" ? "active" : ""}`}
        onClick={() => setActiveSection("chat")}
      >
        Chat History
      </div>

      <div className="menu-item logout" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
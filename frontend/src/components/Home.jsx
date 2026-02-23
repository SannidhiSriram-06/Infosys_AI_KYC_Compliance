import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Home.css";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("ocr");

  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("kycUser"));

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setOcrResult("");
  };

  const handleOCR = () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setOcrResult(
        "OCR result will appear here after backend integration."
      );
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="home-container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleLogout={handleLogout}
      />

      <div className="main-section">

        {/* OCR SECTION */}
        {activeSection === "ocr" && (
          <div className="ocr-card">
            <h2>OCR Document Upload</h2>

            <input type="file" onChange={handleFileChange} />

            {selectedFile && (
              <p className="file-name">
                Selected File: {selectedFile.name}
              </p>
            )}

            <button
              className="ocr-btn"
              onClick={handleOCR}
              disabled={loading}
            >
              {loading ? "Processing..." : "Send for OCR"}
            </button>

            {ocrResult && (
              <div className="result-box">
                <h4>OCR Result:</h4>
                <p>{ocrResult}</p>
              </div>
            )}
          </div>
        )}

        {/* ACCOUNT MANAGEMENT */}
        {activeSection === "account" && (
          <div className="ocr-card">
            <h2>Account Management</h2>

            {storedUser ? (
              <>
                <div className="account-item">
                  <strong>Name:</strong> {storedUser.name}
                </div>

                <div className="account-item">
                  <strong>Email:</strong> {storedUser.email}
                </div>

                <div className="account-item">
                  <strong>Role:</strong> Compliance Officer
                </div>
              </>
            ) : (
              <p>No user data available.</p>
            )}
          </div>
        )}

        {/* CHAT HISTORY */}
        {activeSection === "chat" && (
          <div className="ocr-card">
            <h2>Chat History</h2>
            <p>No OCR records yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;
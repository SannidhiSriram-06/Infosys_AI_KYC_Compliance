import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("kycUser"));

    if (!storedUser) {
      alert("No registered user found.");
      return;
    }

    if (email !== storedUser.email) {
      alert("Email does not match registered account.");
      return;
    }

    const updatedUser = {
      ...storedUser,
      password: newPassword
    };

    localStorage.setItem("kycUser", JSON.stringify(updatedUser));

    alert("Password updated successfully!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Reset Password</h2>

        <form onSubmit={handleReset}>
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Registered Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label>New Password</label>
          </div>

          <button type="submit" className="login-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
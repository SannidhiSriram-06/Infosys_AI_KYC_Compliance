import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const existingUser = localStorage.getItem("kycUser");

    if (existingUser) {
      alert("User already exists. Please login.");
      navigate("/");
      return;
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    localStorage.setItem("kycUser", JSON.stringify(newUser));

    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Create your new account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        <div className="extra-links">
          <a href="/">Already have an account?</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
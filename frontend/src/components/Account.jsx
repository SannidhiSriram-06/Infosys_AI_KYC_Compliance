import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const Account = () => {
  const navigate = useNavigate();


  const [twoFactor, setTwoFactor] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(false);


  const [formData, setFormData] = useState({
    fullName: "Admin User",
    email: "admin@securecheck.ai",
    phone: "+91 98765 43210"
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert("✅ Personal Information updated successfully!");
  };

  const handleUpdatePassword = () => {
    alert("🔒 A password reset link has been sent to your email.");
  };

  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      navigate("/");
    }
  };

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Dashboard / <span>Settings</span>
      </div>

      <div className="page-header">
        <h1>System Settings</h1>
        <p>Manage account security and API configurations</p>
      </div>

      <div className="settings-grid">
        
        <div className="settings-left-col">
          
          <div className="dash-card profile-summary">
            <div className="profile-avatar-large">AK</div>
            <h2 className="profile-name">{formData.fullName}</h2>
            <p className="profile-email">{formData.email}</p>
            <span className="role-badge">Super Admin</span>
          </div>

          <div className="dash-card" style={{ padding: "12px" }}>
            <div className="settings-menu">
              <button className="settings-menu-item active">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Profile Settings
              </button>
              <button className="settings-menu-item">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Security & 2FA
              </button>
              <div className="menu-divider"></div>
              <button className="settings-menu-item danger" onClick={handleSignOut}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>

       
        <div className="settings-right-col">
          
        
          <div className="dash-card">
            <div className="section-header">
              <span className="section-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              Personal Information
            </div>

            <form onSubmit={handleSaveProfile}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" className="form-input" value={formData.fullName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" className="form-input" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="form-group" style={{ maxWidth: "48%" }}>
                <label>Phone Number</label>
                <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleInputChange} />
              </div>

              <div className="save-action-row">
                <button type="submit" className="btn-primary" style={{ width: "auto" }}>
                  Save Changes
                </button>
              </div>
            </form>
          </div>

         <div className="dash-card">
            <div className="section-header">
              <span className="section-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              Security & Authentication
            </div>

            <div className="setting-row">
              <div className="setting-content">
                <div className="setting-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div className="setting-info">
                  <h4>Change Password</h4>
                  <p>Last updated 30 days ago</p>
                </div>
              </div>
              <button type="button" className="btn-update-link" onClick={handleUpdatePassword}>Update</button>
            </div>

            <div className="setting-row">
              <div className="setting-content">
                <div className="setting-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div className="setting-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4>Two-Factor Authentication</h4>
                    <span className={`setting-badge ${twoFactor ? 'enabled' : 'disabled'}`}>
                      {twoFactor ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                  <p>Enhanced security for login</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" className="toggle-input" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

       
          <div className="dash-card">
            <div className="section-header">
              <span className="section-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </span>
              Notifications
            </div>

            <div className="setting-row">
              <div className="setting-content">
                 <div className="setting-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="setting-info">
                  <h4>Email Alerts for High Risk Fraud</h4>
                  <p>Get immediate emails if a fake document is detected</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" className="toggle-input" checked={emailAlerts} onChange={() => setEmailAlerts(!emailAlerts)} />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-row">
               <div className="setting-content">
                 <div className="setting-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div className="setting-info">
                  <h4>Push Notifications for New Verifications</h4>
                  <p>App alerts when a new user submits KYC</p>
                </div>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" className="toggle-input" checked={pushAlerts} onChange={() => setPushAlerts(!pushAlerts)} />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Account;
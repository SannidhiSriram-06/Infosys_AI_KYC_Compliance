import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // States
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Handlers
  const handleNotificationClick = () => {
    alert("🔔 Notifications: You have 3 new verification requests pending review.");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/login");
    }
  };

  return (
    <div className={`dashboard-layout ${isCollapsed ? "sidebar-collapsed" : ""}`}>
     
      <aside className="sidebar" style={{ width: isCollapsed ? "80px" : "260px", transition: "width 0.3s ease" }}>
        <div className="sidebar-brand">
          <div className="brand-icon">🛡️</div>
          {!isCollapsed && "AI KYC System"}
        </div>

        <nav className="sidebar-nav">
          <Link to="/upload" className={`nav-item ${location.pathname === "/upload" ? "active" : ""}`}>
            <span className="nav-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 12h8"/></svg>
            </span>
            {!isCollapsed && "New Verification"}
          </Link>
          
          <Link to="/chat-history" className={`nav-item ${location.pathname === "/chat-history" ? "active" : ""}`}>
            <span className="nav-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M12 7v5l4 2"/></svg>
            </span>
            {!isCollapsed && "Verification History"}
          </Link>
          
          <Link to="/account" className={`nav-item ${location.pathname === "/account" ? "active" : ""}`}>
            <span className="nav-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </span>
            {!isCollapsed && "Settings"}
          </Link>
        </nav>

        <div className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none' }}>
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          {!isCollapsed && "Collapse"}
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-title">AI KYC Compliance System</div>
          <div className="topbar-right">
            <span onClick={handleNotificationClick} style={{ cursor: "pointer", color: "#64748b" }}>
               <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
               </svg>
            </span>

            {/* User Profile with Dropdown */}
            <div className="user-profile-container" style={{ position: 'relative' }}>
              <div 
                className="user-profile" 
                onClick={() => setShowUserMenu(!showUserMenu)}
                style={{ cursor: 'pointer', padding: '4px 8px', borderRadius: '8px', background: showUserMenu ? 'var(--bg-main)' : 'transparent' }}
              >
                <div className="user-avatar">AK</div>
                <div className="user-details">
                  <span className="user-name">Admin User</span>
                  <span className="user-role">Super Admin</span>
                </div>
              </div>

              {showUserMenu && (
                <div className="user-dropdown" style={{
                  position: 'absolute', top: '100%', right: 0, marginTop: '8px',
                  background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
                  borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  width: '180px', zIndex: 100, overflow: 'hidden'
                }}>
                  <div 
                    onClick={() => { navigate("/account"); setShowUserMenu(false); }}
                    style={{ padding: '12px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid var(--border-soft)' }}
                    className="dropdown-item"
                  >
                    ⚙️ Profile Settings
                  </div>
                  <div 
                    onClick={handleLogout}
                    style={{ padding: '12px 16px', cursor: 'pointer', fontSize: '14px', color: 'var(--danger)' }}
                    className="dropdown-item"
                  >
                    Log Out
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="page-content">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
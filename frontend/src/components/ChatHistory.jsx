import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const initialData = [
  { id: 1, initials: "SP", name: "Sneha Patil", docTypeSub: "Aadhaar", docType: "Aadhaar Card", date: "Feb 24, 2026", confidence: 92, status: "Approved" },
  { id: 2, initials: "SR", name: "Sumit Rao", docTypeSub: "PAN", docType: "PAN Card", date: "Feb 22, 2026", confidence: 81, status: "Approved" },
  { id: 3, initials: "PD", name: "Priya Desai", docTypeSub: "Aadhaar", docType: "Aadhaar Card", date: "Feb 20, 2026", confidence: 68, status: "Pending" },
  { id: 4, initials: "AK", name: "Aman Kumar", docTypeSub: "Aadhaar", docType: "Aadhaar Card", date: "Feb 18, 2026", confidence: 45, status: "Rejected" },
  { id: 5, initials: "SN", name: "Shreya Naik", docTypeSub: "PAN", docType: "PAN Card", date: "Feb 15, 2026", confidence: 89, status: "Approved" },
  { id: 6, initials: "VK", name: "Vikram Kapoor", docTypeSub: "Aadhaar", docType: "Aadhaar Card", date: "Feb 10, 2026", confidence: 89, status: "Approved" }
];

const ChatHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("Last 30 Days");
  const [docFilter, setDocFilter] = useState("All Documents");

  const getConfidenceColor = (score) => {
    if (score >= 80) return "var(--success)";
    if (score >= 60) return "var(--warning)";
    return "var(--danger)";
  };

  const filteredData = initialData.filter((row) => {
    const matchesSearch = row.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || row.status === statusFilter;
    const matchesDoc = docFilter === "All Documents" || row.docType === docFilter;
    const rowDate = new Date(row.date);
    const today = new Date("Feb 25, 2026");
    const diffDays = Math.ceil(Math.abs(today - rowDate) / (1000 * 60 * 60 * 24));
    
    let matchesDate = true;
    if (dateFilter === "Last 7 Days") matchesDate = diffDays <= 7;
    if (dateFilter === "Last 30 Days") matchesDate = diffDays <= 30;
    if (dateFilter === "This Year") matchesDate = rowDate.getFullYear() === 2026;

    return matchesSearch && matchesStatus && matchesDoc && matchesDate;
  });

  return (
    <DashboardLayout>
    
      <div className="page-header" style={{ marginBottom: "24px" }}>
        <h1>Verification History</h1>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <div className="metric-icon blue"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
          <div className="metric-info">
            <h4>Total</h4>
            <div className="metric-value">4,523</div>
          </div>
        </div>
        
        <div className="metric-card">
          <div className="metric-icon green"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
          <div className="metric-info">
            <h4>Approved</h4>
            <div className="metric-value">
              3,210 
             
              <span className="trend-badge positive">
                <svg className="anim-bounce" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                12.5%
              </span>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon yellow"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
          <div className="metric-info">
            <h4>Pending</h4>
            <div className="metric-value">
              1,043 
              <span className="trend-badge positive">
                <svg className="anim-bounce" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                5.2%
              </span>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon red"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></div>
          <div className="metric-info">
            <h4>Rejected</h4>
            <div className="metric-value">
              270 
              <span className="trend-badge negative">
                <svg className="anim-bounce" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                1.8%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <div className="search-input-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" className="search-input" placeholder="Search by Name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <select className="filter-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All Status</option><option>Approved</option><option>Pending</option><option>Rejected</option>
        </select>
        <select className="filter-select" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
          <option>Last 30 Days</option><option>Last 7 Days</option><option>This Year</option>
        </select>
        <select className="filter-select" value={docFilter} onChange={(e) => setDocFilter(e.target.value)}>
          <option>All Documents</option><option>Aadhaar Card</option><option>PAN Card</option>
        </select>
      </div>

      <div className="dash-card" style={{ padding: "0", overflow: "hidden" }}>
        <div className="table-container" style={{ margin: 0, padding: 0 }}>
          <table className="data-table">
            <thead>
              <tr><th>User Name</th><th>Document Type</th><th>Submitted Date</th><th>AI Score</th><th>Status</th></tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <div className="user-cell">
                        <span className={`status-dot ${row.status.toLowerCase()}`}></span>
                        <div className="user-initials">{row.initials}</div>
                        <div className="user-cell-info"><h5>{row.name}</h5><span>{row.docTypeSub}</span></div>
                      </div>
                    </td>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> 
                      {row.docType}
                    </td>
                    <td>{row.date}</td>
                    <td>
                      <div className="confidence-wrapper">
                        <div className="confidence-bar-bg"><div className="confidence-bar-fill" style={{ width: `${row.confidence}%`, backgroundColor: getConfidenceColor(row.confidence) }}></div></div>
                        <span style={{ fontWeight: "600", fontSize: "13px" }}>{row.confidence}%</span>
                      </div>
                    </td>
                    <td><span className={`status-pill ${row.status.toLowerCase()}`}>{row.status}</span></td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="5" style={{ textAlign: "center", padding: "48px 0", color: "var(--text-muted)" }}>No verifications found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatHistory;
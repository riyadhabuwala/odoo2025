import React, { useState } from 'react';
import '../css_comp/AdminPanel.css';

const AdminPanel = () => {
  const allUsers = [
    { id: 1, name: 'Alice Doe' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie King' },
    { id: 4, name: 'Diana Prince' }
  ];

  const swapRequests = [
    { id: 5, name: 'Ella Stone' },
    { id: 6, name: 'Frank Wright' }
  ];

  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'swap'

  const displayedUsers = activeTab === 'all' ? allUsers : swapRequests;

  return (
    <div className="admin-panel">
      {/* Topbar */}
      <div className="topbar">
        <h1>Admin Panel</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button onClick={() => setActiveTab('all')}>All Users</button>
        <button onClick={() => setActiveTab('swap')}>pending Requests</button>
      </div>

      {/* Section Heading */}
      <h2 className="section-heading">Manage Users</h2>

      {/* User Cards */}
      <div className="user-list">
        {displayedUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="avatar"></div>
            <div className="user-info">
              <p><strong>{user.name}</strong></p>
              <p>ID: {user.id}</p>
            </div>
            <div className="user-actions">
              <button>Actions 1</button>
              <button>Action 2</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;

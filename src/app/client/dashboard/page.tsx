'use client';

import { useState } from 'react';
import ClientSidebar from '@/components/client/ClientSidebar';
import DashboardContent from '@/components/client/DashboardContent';

export default function ClientDashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-600 to-emerald-600 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      {/* Sidebar */}
      <ClientSidebar 
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-16'
      }`}>
        <DashboardContent />
      </div>
    </div>
  );
} 
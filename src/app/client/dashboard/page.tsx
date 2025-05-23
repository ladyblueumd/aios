'use client';

import { useState } from 'react';
import ClientSidebar from '@/components/client/ClientSidebar';
import DashboardContent from '@/components/client/DashboardContent';

export default function ClientDashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden relative">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.2) contrast(1.1)' }}
      >
        <source src="/videos/7020018_Particle_Dot_3840x2160.mp4" type="video/mp4" />
        <source src="/videos/6994947_Cyber_Ai_3840x2160.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sidebar */}
      <div className="relative z-50">
        <ClientSidebar 
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 relative z-20 ${
        sidebarCollapsed ? 'ml-16' : 'ml-16'
      }`}>
        <DashboardContent />
      </div>
    </div>
  );
} 
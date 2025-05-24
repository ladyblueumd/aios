'use client';

import { useState } from 'react';
import VideoBackground from '@/components/VideoBackground';
import ClientSidebar from '@/components/client/ClientSidebar';
import DashboardContent from '@/components/client/DashboardContent';

export default function ClientDashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [popoutActive, setPopoutActive] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden relative">
      
      {/* Background Video with Fallback */}
      <VideoBackground
        sources={[
          '/videos/7020018_Particle_Dot_3840x2160.mp4',
          '/videos/6994947_Cyber_Ai_3840x2160.mp4'
        ]}
        fallbackImage="/images/desktop_vision_1.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.2) contrast(1.1)' }}
        onLoadError={() => {
          console.log('Dashboard video failed to load, using fallback image');
        }}
      />

      {/* Sidebar */}
      <div className="relative z-50">
        <ClientSidebar 
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onPopoutChange={(active) => setPopoutActive(active)}
        />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 relative z-20 ${
        popoutActive ? 'ml-52' : 'ml-16'
      }`}>
        <DashboardContent />
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import VideoBackground from '@/components/VideoBackground';
import ClientSidebar from '@/components/client/ClientSidebar';
import DashboardContent from '@/components/client/DashboardContent';

export default function ClientDashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [popoutActive, setPopoutActive] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Background Video with Fallback - Fixed positioning */}
      <VideoBackground
        sources={[
          '/videos/7020018_Particle_Dot_1080p_optimized.mp4'
        ]}
        fallbackImage="/images/desktop_vision_1.png"
        className="fixed inset-0 w-full h-full z-0"
        style={{ filter: 'brightness(0.2) contrast(1.1)' }}
        onLoadError={() => {
          console.log('Dashboard video failed to load, using fallback image');
        }}
      />

      {/* App Layout - Proper z-index */}
      <div className="relative z-10 min-h-screen">
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
    </div>
  );
} 
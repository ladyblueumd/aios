'use client';

import { useState, useEffect } from 'react';
import { 
  MdPsychology,
  MdAutoAwesome,
  MdAnalytics,
  MdMonitorHeart,
  MdGroup,
  MdSpeed,
  MdTrendingUp,
  MdWarning,
  MdCheckCircle,
  MdInfo
} from 'react-icons/md';

interface DashboardTile {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<any>;
  bgColor: string;
  status?: 'success' | 'warning' | 'error' | 'info';
}

export default function DashboardContent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dashboardTiles: DashboardTile[] = [
    {
      id: 'active-agents',
      title: 'Active AI Agents',
      value: 3,
      subtitle: '2 running, 1 standby',
      icon: MdPsychology,
      bgColor: 'bg-emerald-500/20',
      status: 'success'
    },
    {
      id: 'automations',
      title: 'Automations',
      value: 12,
      subtitle: '8 active, 4 scheduled',
      icon: MdAutoAwesome,
      bgColor: 'bg-sky-500/20',
      status: 'info'
    },
    {
      id: 'system-health',
      title: 'System Health',
      value: '98%',
      subtitle: 'All systems operational',
      icon: MdMonitorHeart,
      bgColor: 'bg-green-500/20',
      status: 'success'
    },
    {
      id: 'performance',
      title: 'Performance',
      value: '2.4s',
      subtitle: 'Avg response time',
      icon: MdSpeed,
      bgColor: 'bg-orange-500/20',
      status: 'warning'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      value: '1.2K',
      subtitle: 'Tasks completed today',
      icon: MdAnalytics,
      bgColor: 'bg-purple-500/20',
      status: 'info'
    },
    {
      id: 'users',
      title: 'Connected Users',
      value: 24,
      subtitle: '18 active, 6 idle',
      icon: MdGroup,
      bgColor: 'bg-teal-500/20',
      status: 'success'
    }
  ];

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'success':
        return <MdCheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <MdWarning className="w-4 h-4 text-yellow-400" />;
      case 'error':
        return <MdWarning className="w-4 h-4 text-red-400" />;
      default:
        return <MdInfo className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen p-6">
      
      {/* Header */}
      <div className="mb-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">AI/OS Dashboard</h1>
              <p className="text-white/80">Intelligent automation control center</p>
            </div>
            <div className="text-right">
              <div className="text-white/60 text-sm">Current Time</div>
              <div className="text-white text-xl font-mono" suppressHydrationWarning={true}>
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-white/80 text-sm" suppressHydrationWarning={true}>
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {dashboardTiles.map((tile) => (
          <div
            key={tile.id}
            className={`${tile.bgColor} backdrop-blur-lg border border-white/20 p-6 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm">
                <tile.icon className="w-8 h-8 text-white" />
              </div>
              {getStatusIcon(tile.status)}
            </div>
            
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">{tile.value}</div>
              <div className="text-lg font-semibold mb-2">{tile.title}</div>
              <div className="text-sm text-white/80">{tile.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 mb-8 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <button className="bg-sky-500/30 hover:bg-sky-500/50 border border-sky-400/30 p-4 transition-all duration-300 text-white">
            <MdPsychology className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm font-medium">Deploy Agent</div>
          </button>
          
          <button className="bg-emerald-500/30 hover:bg-emerald-500/50 border border-emerald-400/30 p-4 transition-all duration-300 text-white">
            <MdAutoAwesome className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm font-medium">New Automation</div>
          </button>
          
          <button className="bg-purple-500/30 hover:bg-purple-500/50 border border-purple-400/30 p-4 transition-all duration-300 text-white">
            <MdAnalytics className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm font-medium">View Reports</div>
          </button>
          
          <button className="bg-orange-500/30 hover:bg-orange-500/50 border border-orange-400/30 p-4 transition-all duration-300 text-white">
            <MdMonitorHeart className="w-6 h-6 mx-auto mb-2" />
            <div className="text-sm font-medium">System Check</div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { time: '2 minutes ago', event: 'AI Agent "CustomerBot" deployed successfully', status: 'success' },
            { time: '15 minutes ago', event: 'Automation workflow "Email Processing" completed', status: 'success' },
            { time: '32 minutes ago', event: 'System performance optimization applied', status: 'info' },
            { time: '1 hour ago', event: 'User authentication rate limit warning', status: 'warning' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div>{getStatusIcon(activity.status)}</div>
              <div className="flex-1">
                <div className="text-white text-sm">{activity.event}</div>
                <div className="text-white/70 text-xs">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { 
  MdDashboard,
  MdPsychology,
  MdAutoAwesome,
  MdAnalytics,
  MdSettings,
  MdPerson,
  MdNotifications,
  MdSupport,
  MdSecurity,
  MdFolder,
  MdRefresh,
  MdMonitorHeart,
  MdPayment,
  MdMinimize,
  MdPushPin,
  MdCenterFocusStrong,
  MdLogout,
  MdChevronRight,
  MdSmartToy
} from 'react-icons/md';

interface PopoutMenuItem {
  icon: React.ComponentType<any>;
  label: string;
  action: string;
}

interface SidebarItem {
  icon: React.ComponentType<any>;
  label: string;
  action: string;
  popout?: PopoutMenuItem[];
}

interface ClientSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function ClientSidebar({ collapsed, onToggleCollapse }: ClientSidebarProps) {
  const [activePopout, setActivePopout] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState('dashboard');

  const sidebarItems: SidebarItem[] = [
    {
      icon: MdDashboard,
      label: 'Dashboard',
      action: 'dashboard'
    },
    {
      icon: MdPsychology,
      label: 'AI Agents',
      action: 'agents',
      popout: [
        { icon: MdPsychology, label: 'Active Agents', action: 'agents.active' },
        { icon: MdAutoAwesome, label: 'Agent Templates', action: 'agents.templates' },
        { icon: MdSettings, label: 'Agent Config', action: 'agents.config' }
      ]
    },
    {
      icon: MdAutoAwesome,
      label: 'Automations',
      action: 'automations',
      popout: [
        { icon: MdRefresh, label: 'Active Processes', action: 'automations.active' },
        { icon: MdFolder, label: 'Workflow Library', action: 'automations.library' },
        { icon: MdAnalytics, label: 'Performance', action: 'automations.performance' }
      ]
    },
    {
      icon: MdAnalytics,
      label: 'Analytics',
      action: 'analytics',
      popout: [
        { icon: MdMonitorHeart, label: 'System Health', action: 'analytics.health' },
        { icon: MdAnalytics, label: 'Usage Reports', action: 'analytics.usage' },
        { icon: MdPayment, label: 'Cost Analysis', action: 'analytics.costs' }
      ]
    },
    {
      icon: MdPerson,
      label: 'Account',
      action: 'account',
      popout: [
        { icon: MdPerson, label: 'Profile', action: 'account.profile' },
        { icon: MdSecurity, label: 'Security', action: 'account.security' },
        { icon: MdNotifications, label: 'Preferences', action: 'account.preferences' }
      ]
    },
    {
      icon: MdSettings,
      label: 'System',
      action: 'system',
      popout: [
        { icon: MdSettings, label: 'Configuration', action: 'system.config' },
        { icon: MdSupport, label: 'Support', action: 'system.support' },
        { icon: MdLogout, label: 'Logout', action: 'system.logout' }
      ]
    }
  ];

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.action);
    if (item.popout) {
      setActivePopout(activePopout === item.action ? null : item.action);
    } else {
      setActivePopout(null);
      // Handle direct action
      console.log('Action:', item.action);
    }
  };

  const handlePopoutClick = (action: string) => {
    console.log('Popout action:', action);
    setActivePopout(null);
  };

  return (
    <>
      {/* Main Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-50 border-r border-white/10">
        
        {/* Logo/Brand */}
        <div className="flex items-center justify-center py-4 border-b border-white/10">
          <div className="p-2 bg-sky-500/20 backdrop-blur-sm">
            <MdSmartToy className="w-8 h-8 text-sky-400" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col py-4 space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.action} className="relative">
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex flex-col items-center py-3 px-2 transition-all duration-200 ${
                  activeItem === item.action
                    ? 'bg-sky-500/20 text-sky-400 border-r-2 border-sky-400'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                title={item.label}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
                {item.popout && (
                  <MdChevronRight className={`w-3 h-3 mt-1 transition-transform ${
                    activePopout === item.action ? 'rotate-90' : ''
                  }`} />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* System Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-2">
          <button
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            title="Minimize"
          >
            <MdMinimize className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            title="Pin on Top"
          >
            <MdPushPin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Popout Menu */}
      {activePopout && (
        <div className="fixed left-16 top-0 h-full w-48 bg-slate-800/95 backdrop-blur-lg shadow-xl z-40 border-r border-white/10">
          <div className="py-4">
            {sidebarItems
              .find(item => item.action === activePopout)
              ?.popout?.map((popoutItem) => (
                <button
                  key={popoutItem.action}
                  onClick={() => handlePopoutClick(popoutItem.action)}
                  className="w-full flex items-center py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <popoutItem.icon className="w-5 h-5 mr-3 text-sky-400" />
                  <span className="text-sm font-medium">{popoutItem.label}</span>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Overlay to close popout */}
      {activePopout && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setActivePopout(null)}
        />
      )}
    </>
  );
} 
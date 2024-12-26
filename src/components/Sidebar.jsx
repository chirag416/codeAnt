import React from 'react';
import { X, Home, Code2, Cloud, HelpCircle, Settings, ChevronDown, LogOut } from 'lucide-react';

export default function Sidebar({ onClose, isMobile = false }) {
  const menuItems = [
    { icon: Home, label: 'Repositories', active: true },
    { icon: Code2, label: 'AI Code Review' },
    { icon: Cloud, label: 'Cloud Security' },
    { icon: HelpCircle, label: 'How to Use' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${isMobile ? 'w-full' : 'w-64 fixed left-0 top-0 h-full'} bg-white border-r`}>
      <div className="p-4">
        {isMobile && (
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <img src="codeanticon.png" alt="CodeAnt AI" className="h-14 w-full" />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="h-6 w-6" />
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="flex items-center space-x-3 mb-6">
            <img src="codeanticon.png" alt="CodeAnt AI" className="h-14 w-full" />
          </div>
        )}

        <div className="mb-6">
          <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100">
            <span className="text-gray-700">UtkarshDhairyaPatel</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className={`${isMobile ? 'p-4 border-t mt-4' : 'absolute bottom-0 left-0 right-0 p-4'} space-y-2`}>
        <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          Support
        </button>
        <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

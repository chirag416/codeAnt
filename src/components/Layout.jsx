import React from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Layout({ children, isMobile = false }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {isMobile ? (
        <>
          <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
            <div className="flex items-center space-x-3">
              <img src="codeanticon.png" alt="CodeAnt AI" className="h-14 w-full" />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </button>
          </header>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50">
              <Sidebar onClose={() => setIsMenuOpen(false)} isMobile />
            </div>
          )}
        </>
      ) : (
        <Sidebar />
      )}
      <main className={`${isMobile ? 'w-full' : 'ml-64'} p-6`}>
        {children}
      </main>
    </div>
  );
}

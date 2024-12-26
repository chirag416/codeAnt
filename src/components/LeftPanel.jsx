import React from 'react';
import { Bug } from 'lucide-react';
import StatsSection from './StatsSection';
import IssuesCard from './IssuesCard';

export default function LeftPanel() {
  return (
    <div className="w-1/2 bg-gray-50 p-12 md:flex flex-col justify-center min-h-screen hidden relative">
      <div className="space-y-16 relative">
        {/* Upper Box */}
        <div className="bg-white shadow-2xl rounded-lg p-8 relative">
          <div className="flex items-center mb-4">
            <img src="codeanticon.png" alt="CodeAnt Icon" className="w-18 h-12 mr-4" />
            <h1 className="text-xl font-bold text-gray-900">AI to Detect & Autofix Bad Code</h1>
          </div>
          <hr />
          <StatsSection />
          {/* Position IssuesCard */}
          <div className="absolute -bottom-8 -right-8">
            <IssuesCard />
          </div>
        </div>
      </div>
    </div>
  );
}

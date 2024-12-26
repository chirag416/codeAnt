import React from 'react';
import { PieChart } from 'lucide-react';

export default function IssuesCard() {
  return (
    <div className="w-56 bg-white rounded-xl p-2 drop-shadow-2xl relative">
      <div className="flex items-center justify-center">
        <div>
          <h3 className="font-medium text-gray-900">Issues Fixed</h3>
          <p className="text-3xl font-bold mt-1">500K+</p>
        </div>
        <div className="flex flex-col items-end">
          <PieChart className="w-12 h-12 text-blue-500" />
          <div className="mt-2 flex items-center justify-center text-green-600">
            <span className="text-sm">↑ 14%</span>
            <span className="text-xs ml-1">This week</span>
          </div>
        </div>
      </div>
    </div>
  );
}
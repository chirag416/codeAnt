import React from 'react';

function StatItem({ value, label }) {
  return (
    <div>
      <div className="font-bold text-lg text-gray-900">{value}</div>
      <div>{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="mt-4 grid grid-cols-3 text-center">
      <StatItem value="30+" label="Language Support" />
      <StatItem value="10K+" label="Developers" />
      <StatItem value="100K+" label="Hours Saved" />
    </div>
  );
}
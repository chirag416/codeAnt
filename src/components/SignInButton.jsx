import React from 'react';

export default function SignInButton({ provider, icon }) {
  return (
    <button className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
      {icon}
      <span>Sign in with {provider}</span>
    </button>
  );
}
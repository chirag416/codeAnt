import React, { useState } from 'react';
import { Github, Box, Gitlab } from 'lucide-react';
import SignInButton from './SignInButton';

export default function RightPanel() {
  const [mode, setMode] = useState('saas');

  return (
    <div className="w-full md:w-1/2 bg-white p-12 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome to CodeAnt AI</h2>
        </div>

        <div className="space-y-6">
          {/* Mode Selection */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              className={`w-full py-2 px-4 rounded-lg transition-colors ${
                mode === 'saas' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => setMode('saas')}
            >
              SAAS
            </button>
            <button 
              className={`w-full py-2 px-4 rounded-lg transition-colors ${
                mode === 'self-hosted' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => setMode('self-hosted')}
            >
              Self Hosted
            </button>
          </div>

          {/* Sign In Options */}
          <div className="space-y-3">
            {mode === 'saas' ? (
              <>
                <SignInButton provider="GitHub" icon={<Github className="w-5 h-5" />} />
                <SignInButton provider="Bitbucket" icon={<Box className="w-5 h-5" />} />
                <SignInButton provider="GitLab" icon={<Gitlab className="w-5 h-5" />} />
                <SignInButton provider="Azure" icon={<Box className="w-5 h-5" />} />
              </>
            ) : (
              <>
                <SignInButton provider="GitLab" icon={<Gitlab className="w-5 h-5" />} />
                <SignInButton provider="SSO" icon={<Box className="w-5 h-5" />} />
              </>
            )}
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            By signing up you agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
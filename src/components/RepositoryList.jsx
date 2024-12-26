import React from 'react';
import { Search, RefreshCw, Plus, Database } from 'lucide-react';

const RepositoryList = () => {
  const repositories = [
    {
      name: 'design-system',
      visibility: 'Public',
      language: 'React',
      size: '7320 KB',
      updatedAt: '1 day ago',
    },
    {
      name: 'codeant-ci-app',
      visibility: 'Private',
      language: 'Javascript',
      size: '5871 KB',
      updatedAt: '2 days ago',
    },
    {
      name: 'design-system',
      visibility: 'Public',
      language: 'React',
      size: '7320 KB',
      updatedAt: '1 day ago',
    },
    {
      name: 'codeant-ci-app',
      visibility: 'Private',
      language: 'Javascript',
      size: '5871 KB',
      updatedAt: '2 days ago',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Repositories</h2>
        <p className="text-gray-600">33 total repositories</p>
      </div>

      <div className="flex flex-row-reverse space-x-4 space-x-reverse mb-6">
        <button className="flex items-center space-x-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>Add Repository</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
          <RefreshCw className="h-5 w-5" />
          <span>Refresh All</span>
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {repositories.map((repo, index) => (
          <div key={`${repo.name}-${index}`} className="bg-white p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-medium">{repo.name}</h3>
                <span className="px-2 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">
                  {repo.visibility}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="h-4 w-4" />
                <span>{repo.size}</span>
              </div>
              <span className="text-gray-500">Updated {repo.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;

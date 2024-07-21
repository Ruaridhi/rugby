import React from 'react';

export default function NoMatch() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-md text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Sorry, we can't find a matching route
        </h2>
        <h3 className="text-xl font-bold">Have another look or go back</h3>
      </div>
    </div>
  );
}

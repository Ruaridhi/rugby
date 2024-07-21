import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 shadow-md">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-white hover:text-gray-200">
              Add
            </Link>
          </li>
          <li>
            <Link to="/all-players" className="text-white hover:text-gray-200">
              All Players
            </Link>
          </li>
          <li>
            <Link to="/top-5" className="text-white hover:text-gray-200">
              Top-5
            </Link>
          </li>
        </ul>
      </nav>

      <hr className="my-4 border-gray-300" />

      {/* Main Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

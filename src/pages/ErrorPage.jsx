import React from 'react';
import { Link } from 'react-router'; 

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow  transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;

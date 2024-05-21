"use client"; // Add this directive to ensure the component is treated as a Client Component

import React from 'react';
import Cards from './cards/page.jsx';
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession(); // Use destructuring to access session data

  return (
    <>
      <div className="logo-container">
        <button className="logo-button">AniBlog</button>
      </div>
      <Cards />
    </>
  );
}

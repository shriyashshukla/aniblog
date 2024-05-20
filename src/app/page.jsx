import React from 'react';
import Cards from './cards/page.jsx';
import {signOut, useSession} from 'next-auth/react';

export default function Navbar() {
  const session = useSession();
const page = () => {
  return (
    <>
      <div class="logo-container">
        <button class="logo-button">AniBlog</button>

      </div>
      <Cards />

    </>
  );
}

export default page;

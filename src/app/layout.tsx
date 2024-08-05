// src/app/layout.tsx
import Navbar from '../components/Navbar/Navbar'; // Periksa nama dan jalur file
import Footer from '../components/Footer/Footer'; // Periksa nama dan jalur file
import './globals.css'; // Impor Tailwind CSS global
import type { ReactNode } from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

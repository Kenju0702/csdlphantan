'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import './globals.css';
import { Sidebar } from './components/SideBar';
import { AppHeader } from './components/Header';
import { AppFooter } from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Đợi client hoàn tất

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <Layout className="min-h-screen">
          {/* Sidebar */}
          <Sidebar collapsed={collapsed} onCollapse={handleCollapse} />

          {/* Main Layout */}
          <Layout>
            <AppHeader />
            <main className="p-4">{children}</main>
            <AppFooter />
          </Layout>
        </Layout>
      </body>
    </html>
  );
}

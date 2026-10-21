<% if (layout !== 'sidenav') { %>_SKIP_FILE_<% } else { %>
'use client';

import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../lib/hooks/useTheme';

interface SidebarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    <% if (isFullstack) { %>{ label: 'Items', href: '/items' },<% } %>
    { label: 'Docs', href: '#docs' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      {/* Desktop Sidenav */}
      <aside className="hidden md:flex md:w-64 flex-col justify-between border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 sticky top-0 h-screen">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
              T
            </div>
            <div>
              <span className="font-bold text-slate-800 dark:text-white text-lg tracking-tight block">
                <%= projectName %>
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                Sidebar Navigation
              </span>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">Theme</span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </aside>

      {/* Mobile Topbar for Sidenav layout */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
            T
          </div>
          <span className="font-bold text-slate-800 dark:text-white text-lg tracking-tight">
            <%= projectName %>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
<% } %>

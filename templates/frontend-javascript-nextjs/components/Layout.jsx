'use client';

<% if (layout === 'sidenav') { -%>
import { Sidebar } from './Sidebar';
<% } else { -%>
import { Navigation } from './Navigation';
<% } -%>
import { useTheme } from '../lib/hooks/useTheme';

export function Layout({ children }) {
  const [theme, toggleTheme] = useTheme();

<% if (layout === 'sidenav') { -%>
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
          {children}
        </main>
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Built with TemplateGen &bull; Modern Full-Stack Scaffolding
        </footer>
      </div>
    </div>
  );
<% } else { -%>
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        {children}
      </main>
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        Built with TemplateGen &bull; Modern Full-Stack Scaffolding
      </footer>
    </div>
  );
<% } -%>
}

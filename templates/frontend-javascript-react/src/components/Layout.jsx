import { Navigation } from './Navigation';
import { useTheme } from '../hooks/useTheme';

export function Layout({ children }) {
  const [theme, toggleTheme] = useTheme();

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
}

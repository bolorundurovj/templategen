import { useState, useEffect } from 'react'
import { Layout } from './components/Layout'
import { useLocalStorage } from './hooks/useLocalStorage'
<% if (shadcn) { %>import { Button } from "@/components/ui/button"<% } %>
<% if (isFullstack) { %>import { ItemsCrud } from './components/ItemsCrud'<% } %>

function App() {
  const [count, setCount] = useLocalStorage('app-count', 0)
  const [currentView, setCurrentView] = useState(() =>
    typeof window !== 'undefined' && window.location.hash.includes('items') ? 'items' : 'home'
  )

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(window.location.hash.includes('items') ? 'items' : 'home')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <Layout>
      {currentView === 'items' ? (
        <div className="w-full max-w-2xl flex flex-col items-center space-y-6 animate-fade-in-up">
          <div className="w-full flex items-center justify-between">
            <a
              href="#"
              className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline flex items-center space-x-1"
            >
              <span>&larr; Back to Home</span>
            </a>
            <div className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-semibold text-xs tracking-wide uppercase">
              Fullstack CRUD
            </div>
          </div>
          <% if (isFullstack) { %>
          <ItemsCrud />
          <% } %>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-semibold text-sm tracking-wide uppercase shadow-sm">
              TemplateGen Starter
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-teal-700 dark:text-teal-400 tracking-tight">
              Welcome to <%= projectName %>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              You've successfully scaffolded a modern React application with theming and responsive navigation. 
              Start editing <code className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-teal-700 dark:text-teal-300 px-2 py-1 rounded font-mono text-sm">src/App.jsx</code> to see changes instantly.
            </p>
          </div>

          <div className="flex justify-center w-full max-w-md">
            {/* Interactive Card */}
            <div className="relative p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col items-center space-y-6 w-full">
              <div className="flex items-center space-x-4 w-full justify-center">
                <div className="p-3 bg-teal-50 dark:bg-teal-950/60 rounded-lg">
                  <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">Interactive Counter</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Persisted in localStorage with hot reload.</p>
                </div>
              </div>
              
              <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                <% if (shadcn) { %>
                <Button onClick={() => setCount((c) => c + 1)} size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Count is {count}
                </Button>
                <% } else { %>
                <button 
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors w-full"
                  onClick={() => setCount((c) => c + 1)}
                >
                  Count is {count}
                </button>
                <% } %>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default App

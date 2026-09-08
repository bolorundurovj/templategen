'use client';
import { useState } from 'react';
    <  % ;
if (shadcn) {
     %  > ;
    import { Button } from "@/components/ui/button";
     <  % ;
}
 %  >
;
export default function Home() {
    const [count, setCount] = useState(0);
    return (<div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-100 text-teal-800 font-semibold text-sm tracking-wide uppercase shadow-sm">
          TemplateGen Starter
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-teal-700 tracking-tight">
          Welcome to < />%= projectName %>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          You've successfully scaffolded a modern Next.js + TypeScript application. 
          Start editing <code className="bg-white border border-slate-200 text-teal-700 px-2 py-1 rounded font-mono text-sm">app/page.tsx</code> to see changes instantly.
        </p>
      </div>

      {/* Interactive Card */}
      <div className="relative p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center space-y-6 w-full max-w-md">
        <div className="flex items-center space-x-4 w-full justify-center">
          <div className="p-3 bg-teal-50 rounded-lg">
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Interactive Counter</h3>
            <p className="text-slate-500 text-sm">Test out client-side interactivity.</p>
          </div>
        </div>
        
        <div className="w-full pt-4 border-t border-slate-100 flex justify-center">
          < />% if (shadcn) { %  >
            <Button onClick={() => setCount((c) => c + 1)} size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            Count is {count}
          </Button>
                ,
                    < /> % } else { %  >
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors w-full" onClick={() => setCount((c) => c + 1)}>
            Count is {count}
          </button>
                ,
                    < /> % } %>
        </div>
      </div>

    </div>);
}
//# sourceMappingURL=page.js.map
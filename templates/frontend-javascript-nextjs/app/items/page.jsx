<% if (!isFullstack) { %>_SKIP_FILE_<% } else { %>'use client';

import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { ItemsCrud } from '../../components/ItemsCrud';

export default function ItemsPage() {
  return (
    <Layout>
      <div className="w-full max-w-2xl flex flex-col items-center space-y-6 animate-fade-in-up">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline flex items-center space-x-1"
          >
            <span>&larr; Back to Home</span>
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-semibold text-xs tracking-wide uppercase">
            Fullstack CRUD
          </div>
        </div>

        <ItemsCrud />
      </div>
    </Layout>
  );
}
<% } %>

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NewsFeed } from './components/NewsFeed';
import { MemeFeed } from './components/MemeFeed';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <h1 className="text-3xl font-bold text-gray-900">Tech News & Memes</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 px-4 space-y-8">
          <NewsFeed />
          <MemeFeed />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { NewsCard } from './NewsCard';

export const NewsFeed: React.FC = () => {
  const { data, isLoading, error } = useQuery('techNews', async () => {
    const response = await axios.get('https://api.hnpwa.com/v0/news/1.json');
    return response.data;
  });

  if (isLoading) return <div className="text-center">Loading news...</div>;
  if (error) return <div className="text-center text-red-500">Error loading news</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Tech News</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {data?.slice(0, 10).map((item: any) => (
          <NewsCard
            key={item.id}
            title={item.title}
            url={item.url}
            source={item.domain || 'Unknown'}
          />
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { MemeCard } from './MemeCard';

export const MemeFeed: React.FC = () => {
  const { data, isLoading, error } = useQuery('techMemes', async () => {
    const response = await axios.get('https://meme-api.com/gimme/ProgrammerHumor/10');
    return response.data.memes;
  });

  if (isLoading) return <div className="text-center">Loading memes...</div>;
  if (error) return <div className="text-center text-red-500">Error loading memes</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Tech Memes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((meme: any) => (
          <MemeCard
            key={meme.postLink}
            title={meme.title}
            imageUrl={meme.url}
          />
        ))}
      </div>
    </div>
  );
};
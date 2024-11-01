import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface NewsCardProps {
  title: string;
  url: string;
  source: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ title, url, source }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{source}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

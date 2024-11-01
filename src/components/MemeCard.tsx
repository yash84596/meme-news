import React from 'react';

interface MemeCardProps {
  title: string;
  imageUrl: string;
}

export const MemeCard: React.FC<MemeCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};
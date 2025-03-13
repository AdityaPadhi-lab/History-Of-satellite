import React from 'react';
import { Launch } from '../types';
import { Rocket, MapPin, Calendar } from 'lucide-react';

interface Props {
  launch: Launch;
}

const LaunchCard: React.FC<Props> = ({ launch }) => {
  const statusColors = {
    'upcoming': 'bg-yellow-500',
    'in-progress': 'bg-blue-500',
    'successful': 'bg-green-500',
    'failed': 'bg-red-500'
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={launch.imageUrl} 
        alt={launch.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{launch.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${statusColors[launch.status]}`}>
            {launch.status}
          </span>
        </div>
        <div className="space-y-2 text-gray-300">
          <div className="flex items-center gap-2">
            <Rocket size={18} />
            <span>{launch.rocket}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{launch.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{new Date(launch.date).toLocaleDateString()}</span>
          </div>
        </div>
        <p className="mt-4 text-gray-400 line-clamp-2">{launch.description}</p>
      </div>
    </div>
  );
}

export default LaunchCard
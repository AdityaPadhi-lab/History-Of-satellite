import React from 'react';
import { MissionHistoryData } from '../types';
import { Rocket, Calendar, Award, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Props {
  mission: MissionHistoryData;
  darkMode: boolean;
}

const MissionHistory: React.FC<Props> = ({ mission, darkMode }) => {
  const statusIcons = {
    'successful': <CheckCircle className="text-green-500" size={20} />,
    'failed': <XCircle className="text-red-500" size={20} />,
    'partial-success': <AlertCircle className="text-yellow-500" size={20} />
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
      <img 
        src={mission.imageUrl} 
        alt={mission.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {mission.name}
          </h3>
          <div className="flex items-center gap-2">
            {statusIcons[mission.status]}
            <span className={`capitalize ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {mission.status.replace('-', ' ')}
            </span>
          </div>
        </div>
        
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <div className="flex items-center gap-2">
            <Rocket size={18} />
            <span>{mission.agency}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{new Date(mission.date).toLocaleDateString()}</span>
          </div>
        </div>

        <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          {mission.description}
        </p>

        <div className="mt-6">
          <h4 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Award size={20} />
            Key Achievements
          </h4>
          <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {mission.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {mission.videoUrl && (
          <div className="mt-6">
            <iframe
              className="w-full aspect-video rounded-lg"
              src={mission.videoUrl}
              title={`${mission.name} video`}
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionHistory;
import React, { useState } from 'react';
import { Rocket, Search, Moon, Sun, History } from 'lucide-react';
import { Launch, MissionHistoryData } from './types';
import CountdownTimer from './components/CountdownTimer';
import LaunchCard from './components/LaunchCard';
import MissionHistory from './components/MissionHistory';
import { missionHistory } from './data/missions';

// Sample data - In a real app, this would come from an API
const sampleLaunch: Launch = {
  id: '1',
  name: 'Starlink G7-1',
  provider: 'SpaceX',
  date: '2025-04-15T10:00:00Z',
  status: 'upcoming',
  rocket: 'Falcon 9',
  location: 'Kennedy Space Center, FL',
  description: "SpaceX's Starlink mission will launch 60 Starlink satellites to low Earth orbit.",
  imageUrl: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80'
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Rocket className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                SatelliteTrack
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <History size={20} />
                <span>{showHistory ? 'Show Launches' : 'Mission History'}</span>
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search launches..."
                  className={`pl-10 pr-4 py-2 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                  }`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showHistory ? (
          <>
            {/* Hero Section */}
            <div className={`text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <h1 className="text-4xl font-bold mb-4">Next Launch: {sampleLaunch.name}</h1>
              <div className="max-w-2xl mx-auto mb-8">
                <CountdownTimer launchDate={sampleLaunch.date} />
              </div>
            </div>

            {/* Launches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[sampleLaunch, {...sampleLaunch, id: '2'}, {...sampleLaunch, id: '3'}].map((launch) => (
                <LaunchCard key={launch.id} launch={launch} />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Mission History Section */}
            <div className={`text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <h1 className="text-4xl font-bold mb-4">Space Mission History</h1>
              <p className="text-lg opacity-80">Exploring humanity's greatest achievements in space exploration</p>
            </div>

            {/* Mission History Grid */}
            <div className="space-y-8">
              {missionHistory.map((mission) => (
                <MissionHistory key={mission.id} mission={mission} darkMode={darkMode} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
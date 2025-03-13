export interface Launch {
  id: string;
  name: string;
  provider: string;
  date: string;
  status: 'upcoming' | 'in-progress' | 'successful' | 'failed';
  rocket: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface CountdownTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface MissionHistoryData {
  id: string;
  name: string;
  agency: string;
  date: string;
  description: string;
  achievements: string[];
  imageUrl: string;
  videoUrl?: string;
  status: 'successful' | 'failed' | 'partial-success';
}
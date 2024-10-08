import { useState, useEffect } from 'react';

// Types for our data
export interface PersonalProgressData {
  currentGoal: string;
  progress: number;
  streak: number;
}

export interface GroupProgressData {
  groupProgress: number;
  totalParticipants: number;
}

export interface LeaderboardEntry {
  name: string;
  rank: number;
  progress: number;
}

export interface PeriodInformationData {
  currentMonth: string;
  daysLeft: number;
}

// Mock API functions
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPersonalProgress = async (): Promise<PersonalProgressData> => {
  await delay(500); // Simulate network delay
  return {
    currentGoal: "Read 30 minutes daily",
    progress: 75,
    streak: 5
  };
};

export const fetchGroupProgress = async (): Promise<GroupProgressData> => {
  await delay(500);
  return {
    groupProgress: 65,
    totalParticipants: 50
  };
};

export const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  await delay(500);
  return [
    { name: "Alice", rank: 1, progress: 95 },
    { name: "Bob", rank: 2, progress: 90 },
    { name: "Charlie", rank: 3, progress: 85 },
    { name: "David", rank: 4, progress: 80 },
    { name: "Eve", rank: 5, progress: 75 },
  ];
};

export const fetchPeriodInformation = async (): Promise<PeriodInformationData> => {
  await delay(500);
  return {
    currentMonth: "October 2024",
    daysLeft: 23
  };
};

// Custom hook for data fetching
export function useFetchData<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchFunction()
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [fetchFunction]);

  return { data, loading, error };
}
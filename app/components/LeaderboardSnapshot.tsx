import { Progress } from "~/components/ui/progress";
import { useFetchData, fetchLeaderboard } from "~/api/mockApi";

export default function LeaderboardSnapshot() {
  const { data, loading, error } = useFetchData(fetchLeaderboard);

  if (loading) return <div>Loading leaderboard...</div>;
  if (error) return <div>Error loading leaderboard</div>;
  if (!data) return null;

  return (
    <div className="col-span-2 rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Leaderboard</h2>
      <ul className="space-y-4">
        {data.map((user) => (
          <li key={user.rank} className="flex items-center justify-between">
            <span className="w-8 font-medium">{user.rank}.</span>
            <span className="w-24 font-medium">{user.name}</span>
            <Progress value={user.progress} className="h-2 w-32" />
            <span className="w-12 text-right text-sm text-muted-foreground">
              {user.progress}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
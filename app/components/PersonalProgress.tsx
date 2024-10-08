import { Progress } from "~/components/ui/progress";
import { useFetchData, fetchPersonalProgress } from "~/api/mockApi";

export default function PersonalProgress() {
  const { data, loading, error } = useFetchData(fetchPersonalProgress);

  if (loading) return <div>Loading personal progress...</div>;
  if (error) return <div>Error loading personal progress</div>;
  if (!data) return null;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Personal Progress</h2>
      <p className="mb-4 text-lg font-medium">Current Goal: {data.currentGoal}</p>
      <div className="mb-4 flex items-center justify-center">
        <div className="relative h-40 w-40">
          <Progress value={data.progress} className="h-full w-full rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{data.progress}%</span>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground">{data.streak} day streak</p>
    </div>
  );
}
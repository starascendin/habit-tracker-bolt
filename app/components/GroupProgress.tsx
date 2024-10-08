import { Progress } from "~/components/ui/progress";
import { useFetchData, fetchGroupProgress } from "~/api/mockApi";

export default function GroupProgress() {
  const { data, loading, error } = useFetchData(fetchGroupProgress);

  if (loading) return <div>Loading group progress...</div>;
  if (error) return <div>Error loading group progress</div>;
  if (!data) return null;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Group Progress</h2>
      <p className="mb-2 text-lg">Total Participants: {data.totalParticipants}</p>
      <Progress value={data.groupProgress} className="mb-2 h-4" />
      <p className="text-sm text-muted-foreground">
        {data.groupProgress}% of group on track
      </p>
    </div>
  );
}
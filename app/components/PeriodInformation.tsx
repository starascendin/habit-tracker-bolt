import { Calendar } from "lucide-react";
import { useFetchData, fetchPeriodInformation } from "~/api/mockApi";

export default function PeriodInformation() {
  const { data, loading, error } = useFetchData(fetchPeriodInformation);

  if (loading) return <div>Loading period information...</div>;
  if (error) return <div>Error loading period information</div>;
  if (!data) return null;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">Period Information</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-medium">{data.currentMonth}</p>
          <p className="text-sm text-muted-foreground">{data.daysLeft} days left</p>
        </div>
        <Calendar className="h-8 w-8 text-muted-foreground" />
      </div>
    </div>
  );
}
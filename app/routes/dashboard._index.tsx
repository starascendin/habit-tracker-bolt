import PersonalProgress from "~/components/PersonalProgress";
import GroupProgress from "~/components/GroupProgress";
import LeaderboardSnapshot from "~/components/LeaderboardSnapshot";
import PeriodInformation from "~/components/PeriodInformation";

export default function Dashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <PersonalProgress />
      <GroupProgress />
      <LeaderboardSnapshot />
      <PeriodInformation />
    </div>
  );
}
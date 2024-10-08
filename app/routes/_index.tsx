import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Habit Tracking Dashboard" },
    { name: "description", content: "Group Habit Tracking Dashboard" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Habit Tracking Dashboard</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Track your habits and progress with our group dashboard.
        </p>
        <Button asChild>
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
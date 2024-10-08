import { Link, useLocation } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { LayoutDashboard, Target, Settings } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/personal-goal", label: "Personal Goal", icon: Target },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card p-4 shadow-md">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === item.to
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
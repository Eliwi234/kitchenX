import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: "up" | "down";
  trendValue: string;
}

export function StatCard({ title, value, icon: Icon, trend, trendValue }: StatCardProps) {
  const isUp = trend === "up";

  return (
    <div className="bg-surface p-6 rounded-2xl shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary-light rounded-xl text-primary">
          <Icon size={24} />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isUp ? "text-green-600" : "text-red-500"}`}>
          {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {trendValue}
        </div>
      </div>
      <div>
        <h3 className="text-text-secondary text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-text-primary">{value}</p>
      </div>
    </div>
  );
}

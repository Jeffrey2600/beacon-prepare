import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, Info, CheckCircle } from "lucide-react";

type AlertSeverity = "critical" | "warning" | "caution" | "safe";

interface AlertCardProps {
  severity: AlertSeverity;
  title: string;
  description: string;
  time: string;
  location?: string;
}

const severityConfig = {
  critical: {
    icon: AlertTriangle,
    bgColor: "bg-alert-critical",
    textColor: "text-alert-critical-foreground",
    badgeVariant: "destructive" as const,
    label: "Critical",
  },
  warning: {
    icon: AlertCircle,
    bgColor: "bg-alert-warning",
    textColor: "text-alert-warning-foreground",
    badgeVariant: "default" as const,
    label: "Warning",
  },
  caution: {
    icon: Info,
    bgColor: "bg-alert-caution",
    textColor: "text-alert-caution-foreground",
    badgeVariant: "secondary" as const,
    label: "Caution",
  },
  safe: {
    icon: CheckCircle,
    bgColor: "bg-alert-safe",
    textColor: "text-alert-safe-foreground",
    badgeVariant: "outline" as const,
    label: "Safe",
  },
};

export default function AlertCard({ severity, title, description, time, location }: AlertCardProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <Card className="overflow-hidden border-l-4 border-l-current" style={{ borderLeftColor: `hsl(var(--alert-${severity}))` }}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className={`${config.bgColor} ${config.textColor} p-2 rounded-lg`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={config.badgeVariant}>{config.label}</Badge>
              <span className="text-xs text-muted-foreground">{time}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {location && (
              <p className="text-xs text-muted-foreground mt-2">📍 {location}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

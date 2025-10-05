import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlertCard from "@/components/AlertCard";
import { Bell, BellOff } from "lucide-react";

const allAlerts = [
  {
    severity: "critical" as const,
    title: "Tsunami Warning",
    description: "Tsunami warning issued for coastal areas. Evacuate to higher ground immediately.",
    time: "15 minutes ago",
    location: "Coastal Region, CA",
  },
  {
    severity: "warning" as const,
    title: "Severe Weather Alert",
    description: "Heavy rainfall expected in the next 6 hours. Prepare for potential flooding.",
    time: "2 hours ago",
    location: "Bay Area, CA",
  },
  {
    severity: "warning" as const,
    title: "Wind Advisory",
    description: "Strong winds up to 50 mph expected. Secure outdoor objects.",
    time: "3 hours ago",
    location: "San Francisco, CA",
  },
  {
    severity: "caution" as const,
    title: "Traffic Advisory",
    description: "Highway 101 closed due to emergency maintenance.",
    time: "4 hours ago",
    location: "San Francisco, CA",
  },
  {
    severity: "caution" as const,
    title: "Air Quality Alert",
    description: "Poor air quality due to wildfire smoke. Limit outdoor activities.",
    time: "6 hours ago",
    location: "Northern California",
  },
  {
    severity: "safe" as const,
    title: "All Clear",
    description: "Previous earthquake alert has been lifted. No further action needed.",
    time: "1 day ago",
    location: "Your Area",
  },
  {
    severity: "safe" as const,
    title: "Shelter Reopened",
    description: "Emergency shelter at Community Center has reopened for services.",
    time: "2 days ago",
    location: "Downtown",
  },
];

export default function Alerts() {
  const criticalAlerts = allAlerts.filter((a) => a.severity === "critical");
  const warningAlerts = allAlerts.filter((a) => a.severity === "warning");
  const cautionAlerts = allAlerts.filter((a) => a.severity === "caution");
  const safeAlerts = allAlerts.filter((a) => a.severity === "safe");

  return (
    <div className="min-h-screen bg-background lg:pl-64 pt-16 lg:pt-0">
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Alerts</h1>
            <p className="text-muted-foreground">Stay informed about active alerts in your area</p>
          </div>
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Manage Notifications
          </Button>
        </div>

        {/* Alert Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-alert-critical">{criticalAlerts.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Critical</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-alert-warning">{warningAlerts.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Warnings</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-alert-caution">{cautionAlerts.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Cautions</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-alert-safe">{safeAlerts.length}</p>
              <p className="text-xs text-muted-foreground mt-1">All Clear</p>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">
              All
              <Badge variant="secondary" className="ml-2">
                {allAlerts.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="warning">Warning</TabsTrigger>
            <TabsTrigger value="caution">Caution</TabsTrigger>
            <TabsTrigger value="safe">Safe</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-6">
            {allAlerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </TabsContent>

          <TabsContent value="critical" className="space-y-3 mt-6">
            {criticalAlerts.length > 0 ? (
              criticalAlerts.map((alert, index) => <AlertCard key={index} {...alert} />)
            ) : (
              <Card className="p-8 text-center">
                <BellOff className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">No critical alerts at this time</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="warning" className="space-y-3 mt-6">
            {warningAlerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </TabsContent>

          <TabsContent value="caution" className="space-y-3 mt-6">
            {cautionAlerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </TabsContent>

          <TabsContent value="safe" className="space-y-3 mt-6">
            {safeAlerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </TabsContent>
        </Tabs>

        {/* Notification Settings */}
        <Card className="p-6 bg-muted">
          <h3 className="font-semibold text-foreground mb-3">🔔 Alert Preferences</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enable push notifications to receive real-time emergency alerts on your device. You can
            customize which types of alerts you want to receive.
          </p>
          <Button variant="outline" className="w-full">
            Configure Alert Settings
          </Button>
        </Card>
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AlertCard from "@/components/AlertCard";
import { Shield, Phone, BookOpen, MapPin } from "lucide-react";

export default function Dashboard() {
  const recentAlerts = [
    {
      severity: "warning" as const,
      title: "Severe Weather Alert",
      description: "Heavy rainfall expected in the next 6 hours. Prepare for potential flooding.",
      time: "2 hours ago",
      location: "Bay Area, CA",
    },
    {
      severity: "caution" as const,
      title: "Traffic Advisory",
      description: "Highway 101 closed due to emergency maintenance.",
      time: "4 hours ago",
      location: "San Francisco, CA",
    },
    {
      severity: "safe" as const,
      title: "All Clear",
      description: "Previous earthquake alert has been lifted. No further action needed.",
      time: "1 day ago",
      location: "Your Area",
    },
  ];

  return (
    <div className="min-h-screen bg-background lg:pl-64 pt-16 lg:pt-0">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-primary-foreground shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold">Emergency Ready</h1>
              <p className="text-primary-foreground/90">Stay informed. Stay prepared. Stay safe.</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-alert-critical rounded-lg">
                <Phone className="h-6 w-6 text-alert-critical-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Emergency</p>
                <p className="text-xl font-bold text-foreground">911</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Guides</p>
                <p className="text-lg font-semibold text-foreground">Learn More</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent rounded-lg">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Find</p>
                <p className="text-lg font-semibold text-foreground">Shelters</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-alert-safe rounded-lg">
                <Shield className="h-6 w-6 text-alert-safe-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-lg font-semibold text-foreground">All Clear</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Current Status */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Current Status</h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-alert-safe rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-alert-safe-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Your area is safe</p>
              <p className="text-sm text-muted-foreground">No active emergency alerts in your region</p>
            </div>
          </div>
        </Card>

        {/* Recent Alerts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Recent Alerts</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </div>
        </div>

        {/* Preparedness Tip */}
        <Card className="p-6 bg-muted">
          <h3 className="font-semibold text-foreground mb-2">💡 Preparedness Tip</h3>
          <p className="text-sm text-muted-foreground">
            Ensure your emergency kit includes at least 3 days worth of water (1 gallon per person per day),
            non-perishable food, first aid supplies, flashlight, and battery-powered radio.
          </p>
        </Card>
      </div>
    </div>
  );
}

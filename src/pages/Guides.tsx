import { Card } from "@/components/ui/card";
import { CloudRain, Flame, Wind, Waves, Zap, Mountain } from "lucide-react";

const guides = [
  {
    icon: CloudRain,
    title: "Floods",
    description: "Learn how to prepare for and respond to flooding situations",
    color: "bg-blue-500",
    tips: [
      "Move to higher ground immediately",
      "Avoid walking or driving through flood waters",
      "Keep emergency supplies in waterproof containers",
      "Know your evacuation routes",
    ],
  },
  {
    icon: Flame,
    title: "Fires",
    description: "Fire safety and evacuation procedures",
    color: "bg-orange-500",
    tips: [
      "Have multiple escape routes planned",
      "Install smoke detectors on every floor",
      "Keep a fire extinguisher accessible",
      "Practice the stop, drop, and roll technique",
    ],
  },
  {
    icon: Wind,
    title: "Hurricanes",
    description: "Hurricane preparedness and safety measures",
    color: "bg-purple-500",
    tips: [
      "Board up windows and secure outdoor items",
      "Stock up on emergency supplies before the storm",
      "Know the difference between watch and warning",
      "Have a communication plan with family",
    ],
  },
  {
    icon: Zap,
    title: "Earthquakes",
    description: "Earthquake safety and response guidelines",
    color: "bg-yellow-600",
    tips: [
      "Drop, Cover, and Hold On during shaking",
      "Stay away from windows and heavy objects",
      "Secure heavy furniture to walls",
      "Have an emergency supply kit ready",
    ],
  },
  {
    icon: Waves,
    title: "Tsunamis",
    description: "Tsunami awareness and evacuation procedures",
    color: "bg-cyan-500",
    tips: [
      "Move to high ground immediately after an earthquake",
      "Never go to the shore to watch for a tsunami",
      "Listen for official warnings and alerts",
      "Have an evacuation plan and practice it",
    ],
  },
  {
    icon: Mountain,
    title: "Landslides",
    description: "Landslide awareness and prevention",
    color: "bg-amber-700",
    tips: [
      "Watch for changes in landscape",
      "Listen for unusual sounds indicating moving debris",
      "Move away from the path of a landslide",
      "Avoid river valleys during heavy rainfall",
    ],
  },
];

export default function Guides() {
  return (
    <div className="min-h-screen bg-background lg:pl-64 pt-16 lg:pt-0">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Disaster Preparedness Guides</h1>
          <p className="text-muted-foreground">Learn how to prepare for and respond to various disasters</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`${guide.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Key Safety Tips:</p>
                      <ul className="space-y-1">
                        {guide.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-primary text-primary-foreground">
          <h3 className="text-xl font-bold mb-2">General Emergency Guidelines</h3>
          <div className="space-y-2 text-sm">
            <p>✓ Always have an emergency communication plan</p>
            <p>✓ Keep important documents in a waterproof container</p>
            <p>✓ Maintain a well-stocked emergency kit</p>
            <p>✓ Know your local evacuation routes and shelter locations</p>
            <p>✓ Stay informed through local emergency management authorities</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

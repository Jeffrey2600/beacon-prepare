import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Heart, Droplet, AlertTriangle } from "lucide-react";

const emergencyContacts = [
  {
    name: "Emergency Services",
    number: "911",
    description: "Police, Fire, Medical emergencies",
    icon: AlertTriangle,
    color: "bg-alert-critical",
    iconColor: "text-alert-critical-foreground",
  },
  {
    name: "Poison Control",
    number: "1-800-222-1222",
    description: "24/7 poison emergency hotline",
    icon: Droplet,
    color: "bg-purple-500",
    iconColor: "text-white",
  },
  {
    name: "Red Cross",
    number: "1-800-733-2767",
    description: "Disaster relief and emergency assistance",
    icon: Heart,
    color: "bg-red-500",
    iconColor: "text-white",
  },
  {
    name: "FEMA",
    number: "1-800-621-3362",
    description: "Federal Emergency Management Agency",
    icon: MapPin,
    color: "bg-primary",
    iconColor: "text-primary-foreground",
  },
];

const localServices = [
  { name: "Local Police (Non-Emergency)", number: "(555) 123-4567" },
  { name: "Fire Department (Non-Emergency)", number: "(555) 123-4568" },
  { name: "Hospital Emergency", number: "(555) 123-4569" },
  { name: "Gas Company Emergency", number: "(555) 123-4570" },
  { name: "Electric Company Emergency", number: "(555) 123-4571" },
  { name: "Water Company Emergency", number: "(555) 123-4572" },
];

const hotlines = [
  { name: "Suicide Prevention Lifeline", number: "988" },
  { name: "Crisis Text Line", number: "Text HOME to 741741" },
  { name: "Domestic Violence Hotline", number: "1-800-799-7233" },
  { name: "Child Abuse Hotline", number: "1-800-422-4453" },
  { name: "Substance Abuse Hotline", number: "1-800-662-4357" },
];

export default function Contacts() {
  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\D/g, "")}`;
  };

  return (
    <div className="min-h-screen bg-background lg:pl-64 pt-16 lg:pt-0">
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Contacts</h1>
          <p className="text-muted-foreground">Quick access to important emergency numbers</p>
        </div>

        {/* Primary Emergency Contacts */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Primary Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`${contact.color} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${contact.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{contact.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-1">{contact.number}</p>
                      <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
                      <Button
                        size="sm"
                        onClick={() => handleCall(contact.number)}
                        className="w-full"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Local Services */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Local Emergency Services</h2>
          <Card className="p-6">
            <div className="space-y-3">
              {localServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{service.name}</p>
                    <p className="text-sm text-primary font-semibold">{service.number}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCall(service.number)}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Crisis Hotlines */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Crisis & Support Hotlines</h2>
          <Card className="p-6">
            <div className="space-y-3">
              {hotlines.map((hotline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{hotline.name}</p>
                    <p className="text-sm text-primary font-semibold">{hotline.number}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCall(hotline.number)}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Personal Emergency Contacts */}
        <Card className="p-6 bg-muted">
          <h3 className="font-semibold text-foreground mb-3">📝 Add Your Personal Contacts</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Keep a list of personal emergency contacts including family members, friends, neighbors,
            and your doctor's office. Store these numbers in your phone and write them down in case
            your phone is unavailable.
          </p>
          <Button variant="outline" className="w-full">
            Create Personal Contact List
          </Button>
        </Card>
      </div>
    </div>
  );
}

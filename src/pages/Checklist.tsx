import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const checklistCategories = [
  {
    category: "Emergency Kit Essentials",
    items: [
      "Water (1 gallon per person per day for 3 days)",
      "Non-perishable food (3-day supply)",
      "Battery-powered or hand crank radio",
      "Flashlight and extra batteries",
      "First aid kit",
      "Whistle to signal for help",
      "Dust mask or N95 respirators",
      "Plastic sheeting and duct tape",
      "Moist towelettes and garbage bags",
      "Wrench or pliers to turn off utilities",
    ],
  },
  {
    category: "Important Documents",
    items: [
      "Copies of insurance policies",
      "Identification documents",
      "Bank account records",
      "Medical records and prescriptions",
      "Proof of address",
      "Deed/lease to home",
      "Passports and birth certificates",
      "Contact information for family and doctors",
    ],
  },
  {
    category: "Communication & Safety",
    items: [
      "Cell phone with chargers and backup battery",
      "Family emergency contact list",
      "Local maps",
      "Emergency whistle",
      "Fire extinguisher",
      "Matches in waterproof container",
    ],
  },
  {
    category: "Personal Needs",
    items: [
      "Prescription medications (7-day supply)",
      "Non-prescription medications",
      "Glasses and contact lens supplies",
      "Infant formula and diapers",
      "Pet food and supplies",
      "Cash and credit cards",
      "Complete change of clothing",
      "Sleeping bag or warm blanket",
    ],
  },
];

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalItems = checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  return (
    <div className="min-h-screen bg-background lg:pl-64 pt-16 lg:pt-0">
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Preparedness Checklist</h1>
          <p className="text-muted-foreground">Track your emergency preparedness progress</p>
        </div>

        {/* Progress Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Overall Progress</h2>
            <Badge variant={progress === 100 ? "default" : "secondary"}>
              {checkedCount} / {totalItems}
            </Badge>
          </div>
          <Progress value={progress} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">
            {progress === 100
              ? "🎉 You're fully prepared!"
              : `${Math.round(progress)}% complete - Keep going!`}
          </p>
        </Card>

        {/* Checklist Categories */}
        <div className="space-y-6">
          {checklistCategories.map((category, catIndex) => {
            const categoryItems = category.items.length;
            const categoryChecked = category.items.filter(
              (_, itemIndex) => checkedItems[`${catIndex}-${itemIndex}`]
            ).length;
            const categoryProgress = (categoryChecked / categoryItems) * 100;

            return (
              <Card key={catIndex} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                  <Badge variant="outline">
                    {categoryChecked} / {categoryItems}
                  </Badge>
                </div>
                <Progress value={categoryProgress} className="h-2 mb-4" />
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const key = `${catIndex}-${itemIndex}`;
                    return (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <Checkbox
                          id={key}
                          checked={checkedItems[key] || false}
                          onCheckedChange={() => toggleItem(key)}
                          className="mt-1"
                        />
                        <label
                          htmlFor={key}
                          className={`flex-1 text-sm cursor-pointer ${
                            checkedItems[key]
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tips Card */}
        <Card className="p-6 bg-muted">
          <h3 className="font-semibold text-foreground mb-3">💡 Preparation Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Store supplies in airtight plastic bags</li>
            <li>• Keep items in an easy-to-carry container</li>
            <li>• Review and update your kit every 6 months</li>
            <li>• Customize your kit based on your family's needs</li>
            <li>• Consider having a kit for your car and workplace</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

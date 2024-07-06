import { Card, CardTitle, CardDescription } from "@/components/ui/card";

// Define an array with card data
const cardData = [
  {
    title: "The offerings",
    description: "SAAS,Web app,AI apps,Mobile apps or SDKs",
  },
  {
    title: "Whats included?",
    description:
      "MVP as your core product, landing page to drive sales, and SEO-ready blog to start getting organic traffic.",
  },
  {
    title: "Custom scalable architecture",
    description:
      "Get seamless integration with payment gateways, user authentication systems, and email marketing platforms.",
  },
  {
    title: "Fast and reliable development",
    description:
      "We'll provide several development updates every week.",
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} className="p-6 bg-background rounded-lg shadow-md">
          <CardTitle className="text-xl font-semibold mb-2">
            {card.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {card.description}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}

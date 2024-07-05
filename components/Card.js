import { Card, CardTitle, CardDescription } from "@/components/ui/card";

// Define an array with card data
const cardData = [
  {
    title: "All included",
    description: "Web application as your core product, landing page to drive sales, and SEO-ready blog to start getting organic traffic."
  },
  {
    title: "Complete infrastructure",
    description: "Get seamless integration with payment gateways, user authentication systems, and email marketing platforms."
  },
  {
    title: "It actually works",
    description: "We code using latest technologies to ensure blazing-fast performance, stability, and scalability."
  },
  {
    title: "Less is more",
    description: "We guide you to define the core features of your MVP and keep it simple. Stop planning and start testing your idea with real users."
  }
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} className="p-6 bg-background rounded-lg shadow-md">
          <CardTitle className="text-xl font-semibold mb-2">{card.title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {card.description}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ExternalLinkIcon } from 'lucide-react';


export default function ProjectCard({ project }) {
  const { image, title, href, description } = project;
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
      {/* <img
        src={image}
        width={300}
        height={300}
        alt="Project Image"
        className="rounded-t-md object-cover aspect-[3/2] w-full h-full"
      /> */}
      <Image src={image} width="400" height="400" alt="Project Image" />

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-4">
        <Link
          href={href}
          className="flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Visit Website {" "} <ExternalLinkIcon size={24} />
        </Link>
      </CardFooter>
    </Card>
  );
}

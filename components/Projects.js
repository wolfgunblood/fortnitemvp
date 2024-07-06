import React, { useState } from "react";
import ProjectCard from "./project-card";
import { Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Copypal",
    href: "https://copywritingpal.com",
    dates: "Jan 2024 - Present",
    active: true,
    description: "Craft Winning Email Campaigns in Minutes, Not Hours",
    technologies: [
      "Next.js",
      "Javascript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Lemon Squeezy",
      "Cloudflare",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://copywritingpal.com",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "https://utfs.io/f/76a131a2-7e19-4a42-975f-6d46c116b7eb-8cqplh.png",
    video: "hello world",
    icon: "/copypal.svg",
  },
  {
    title: "SWE interview resources",
    href: "https://sweinterview.dev",
    dates: "May 2024 - Present",
    active: true,
    description: "Directory for resources for tech interview prep",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://sweinterview.dev",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "https://utfs.io/f/e4a333f9-a10c-41a3-b113-e088e941887a-bo9e74.png",
    video: "hello world",
    icon: "/sweinterviews.svg",
  },
  {
    title: "Next.js Saas Kit",
    href: "https://saaskit.one",
    dates: "Jun 2024 - Present",
    active: true,
    description: "OPen source next js saas kit",
    technologies: [
      "Next.js",
      "Typescript",
      "Mongo DB",
      "TailwindCSS",
      "Lemon squeezy",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://saaskit.one",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/wolfgunblood/nextjs-saaskit",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "https://utfs.io/f/6065a913-376e-43a3-a59d-519c358e737f-8pkbvt.png",
    video: "hello world",
    icon: "/saaskit.svg",
  },

  {
    title: "Backend Mentors",
    href: "https://backendmentors.com",
    dates: "Feb 2024 - Present",
    active: true,
    description: "Better way to prepare for backend interviews",
    technologies: [
      "Next.js",
      "Javascript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Lemon Squeezy",
      "Cloudflare",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://backendmentors.com",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "https://utfs.io/f/fba602b5-5783-4bc2-a648-1cdb85c03b9a-4rl6pu.png",
    video: "hello world",
    icon: "/backend.svg",
  },
  {
    title: "AnimeKun",
    href: "https://animekun.me/",
    dates: "May 2024 - Present",
    active: true,
    description: "free sdk serving quality anime quotes",
    technologies: [
      "Next.js",
      "Javascript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Lemon Squeezy",
      "Cloudflare",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://animekun.me",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "https://utfs.io/f/8820012a-ee08-46fd-ae8a-87afe0c53785-wqqpy6.png",
    video: "hello world",
    icon: "/anime.svg",
  },
  {
    title: "Job Board Hub",
    href: "https://jobboardhub.one",
    dates: "May 2024 - Present",
    active: true,
    description: "All in ine directory for Job Boards",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://jobboardhub.one",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/wolfgunblood/jobboardhub",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "https://utfs.io/f/f2e7df5b-a5f0-4a55-8bc3-f203640ed86b-pl4zna.png",
    video: "hello world",
    icon: "/jobboard.svg",
  },
 
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex flex-col items-center justify-center px-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl">My Recent Works</h1>
          {/* <p className="text-slate-400 ">
          Transform your idea into a market-ready MVP in under 14-days,
          complete with everything you need to launch and operate it.
        </p> */}
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center gap-5 p-2">
        {selectedProject && <ProjectCard project={selectedProject} />}
        <div className="flex gap-2">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)} className="cursor-pointer">
              <Image 
                src={project.icon}
                width="40"
                height="40"
                alt="icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

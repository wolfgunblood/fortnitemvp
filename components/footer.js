import Link from "next/link";
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted w-full">
      <div className="container max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">Jalaj</div>
          <div className="text-sm text-muted-foreground">@jalajdu</div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://x.com/jalajdu"
            className="inline-flex h-8 items-center justify-center rounded-md bg-[#1da1f2] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#1a91da] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1da1f2] focus-visible:ring-offset-2"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for links to external sites
          >
            <TwitterIcon className="h-4 w-4 mr-2" />
            Twitter
          </a>
          <a
            href="https://github.com/wolfgunblood"
            className="inline-flex h-8 items-center justify-center rounded-md bg-[#24292f] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#2c3137] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#24292f] focus-visible:ring-offset-2"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure for links to external sites
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

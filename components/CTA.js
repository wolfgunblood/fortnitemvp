import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full py-8 md:py-8 lg:py-8 bg-muted">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-base font-bold tracking-normal md:text-4xl/tight">
            Launch Your MVP in Just 14 days{" "}
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contact us to start the discussion.
          </p>
          <div>
            <Link
              href="https://x.com/jalajdu"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

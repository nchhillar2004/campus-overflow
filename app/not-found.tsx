import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col space-x-2 items-center justify-center">
      <h2 className="text-2xl">404 | Page not found</h2>
      <Button variant="blue" asChild>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
}

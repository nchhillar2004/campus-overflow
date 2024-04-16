"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl">500 | Internal server error</h2>
      <Button variant="blue" asChild className="mt-2">
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
}

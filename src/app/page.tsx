import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/documents/123">
        <Button>Click Me</Button>
      </Link>
    </div>
  );
}

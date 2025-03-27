"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { UserAuth } from "./auth";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <Link href="/" className="text-xl -ml-6 flex h-[--header-row-height] items-center px-6">
            🍏 <span className="sr-only">Back to homepage</span>
          </Link>
          <div className="flex mx-auto text-xs gap-8">
            <Link href="/about">About</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/courts">Courts</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/profile">Test</Link>
            <Link href="/"></Link>
          </div>
        </Container>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
          <Link href="/">
            <p className="text-xl font-semibold">GamePulse</p>
          </Link>
          <Button size="small" onClick={() => setIsOpen(true)}>
            Sign up
          </Button>
        </Container>
      </div>

      <UserAuth isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

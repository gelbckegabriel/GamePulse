import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";

export default function Header() {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="text-xl -ml-6 flex h-[--header-row-height] items-center px-6"
          >
            🍏 <span className="sr-only">Back to homepage</span>
          </a>
          <div className="flex text-xs gap-5">
            <Link href="/about">About</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/courts">Courts</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/"></Link>
          </div>

          {/* <Link href="/"></Link> */}
        </Container>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
          <p className="text-xl font-semibold">GamePulse</p>
          <Button size="small">Sign up</Button>
        </Container>
      </div>
    </>
  );
}

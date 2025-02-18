import { Button } from "./button";
import { Container } from "./container";

export default function Header() {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a href="/" className="text-xl -ml-6 flex h-[--header-row-height] items-center px-6">
            🍏 <span className="sr-only">Back to homepage</span>
          </a>
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

import { Button } from "./shared/button";
import { Container } from "./shared/container";
import { Hero } from "./shared/section/hero";
import { HeroSub } from "./shared/section/hero-sub";

export default function Home() {
  return (
    <>
      <div className="bg-background">
        <Hero />
        <HeroSub />
      </div>
      <div>
        <Container>3 Col layout</Container>
      </div>
      <div>
        <Container>Carousel with posters</Container>
      </div>
    </>
  );
}

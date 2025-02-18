import { Button } from "./shared/button";
import { Container } from "./shared/container";
import { Hero } from "./shared/section/hero";
import { HeroSub } from "./shared/section/hero-sub";
import { SportsCarousel } from "./shared/section/sports-carousel";

export default function Home() {
  return (
    <>
      <div className="bg-background relative z-10">
        <Hero />
        <HeroSub />
      </div>
      <SportsCarousel />
      <div className="h-[300vh]" />
    </>
  );
}

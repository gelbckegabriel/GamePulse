import { Button } from "./shared/button";
import { Container } from "./shared/container";
import { Hero } from "./shared/section/hero";
import { HeroSub } from "./shared/section/hero-sub";
import { VideoCarousel } from "./shared/section/video-carousel";

export default function Home() {
  return (
    <>
      <div className="bg-background">
        <Hero />
        <HeroSub />
      </div>
      <VideoCarousel />
      <div className="h-[300vh]" />
    </>
  );
}

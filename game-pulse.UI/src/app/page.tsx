import InstallGamePulse from "./shared/install-button/install-button";
import { Hero } from "./shared/section/hero";
import { HeroSub } from "./shared/section/hero-sub";
import { SportsCarousel } from "./shared/section/sports-carousel";
import { Container } from "./shared/utilities/container";

export default function Home() {
  return (
    <>
      <div className="bg-background relative z-10">
        <Hero />
        <HeroSub />
      </div>
      <SportsCarousel />

      <Container>
        {/* Install GamePulse */}
        <div className="-mt-60 md:-mt-40 mb-12 max-w-[]">
          <InstallGamePulse />
        </div>
      </Container>
    </>
  );
}

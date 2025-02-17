"use client";

import { Container } from "../container";
import { FadeIn } from "../fade-in";

export const HeroSub = () => {
  return (
    <div>
      <Container className="z-10 relative text-white text-4xl font-bold space-y-12 py-36 max-w-[692px]">
        <FadeIn>
          <p>Find public courts near you and start playing today.</p>
        </FadeIn>
        <FadeIn>
          <p>Connect with local players and join pick-up games.</p>
        </FadeIn>
        <FadeIn>
          <p>From casual matches to serious competition, it's all here.</p>
        </FadeIn>
        <FadeIn>
          <p>Your city, your court, your game!</p>
        </FadeIn>
      </Container>
    </div>
  );
};

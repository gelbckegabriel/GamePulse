import { Button } from "../button";
import { Container } from "../container";

export const Hero = () => {
  return (
    <div className="relative h-[300vh] bg-background text-white">
      <div className="absolute left-0 top-0 w-full">
        <video
          src="/home/HeroVideoHD.mp4"
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Container className="relative z-10 pb-7 min-h-[--hero-height] flex flex-col justify-end items-start">
        <h1 className="text-5xl font-bold mb-10">
          Players are waiting. <br />
          Are you in?
        </h1>
        <Button className="mb-16" size="large">Sign up</Button>
        <p className="font-semibold">Only on GamePulse.</p>
      </Container>
    </div>
  );
};

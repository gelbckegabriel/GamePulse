import { Button } from "../button";
import { Container } from "../container";

export const Hero = () => {
  return (
    <div className="h-[300vh] bg-background text-white">
        // <img src="/home/basketball.jpg"/>
        <video
        src="/home/hero.mp4"
        className="w-full h-auto"
        controls
        autoplay
        loop
        muted
        playsinline
      />
      <Container>
        <h1 className="text-5xl font-bold">
            Players are waiting. <br />
            Are you in?
        </h1>
        <Button size="large">Sign up</Button>
        <p className="font-semibold">Only on GamePulse.</p>
      </Container>
    </div>
  );
};

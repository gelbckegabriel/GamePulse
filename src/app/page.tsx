import { Button } from "./shared/button";
import { Container } from "./shared/container";
import { Hero } from "./shared/section/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Container>usps</Container>
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

import { Container } from "../container";
import {
  randomSportsSet1,
  randomSportsSet2,
  SportImages,
  sports,
} from "./sports-images";

export const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div className="flex gap-5 mb-5 overflow-clip">
        <div className="shrink-0 w-[60vh] rounded-2xl overflow-clip">
          <img className="h-full w-full object-cover" src={sports[0].image} alt={sports[0].title} />
        </div>
        <div className="shrink-0 w-[60vh] rounded-2xl overflow-clip">
          <img className="h-full w-full object-cover" src={sports[4].image} alt={sports[4].title} />
        </div>
        <div className="shrink-0 w-[60vh] rounded-2xl overflow-clip">
          <img className="h-full w-full object-cover" src={sports[9].image} alt={sports[9].title} />
        </div>
      </div>

      <SmallVideoCarousel sports={randomSportsSet1} />
      <SmallVideoCarousel sports={randomSportsSet2} />
    </div>
  );
};

const SmallVideoCarousel = ({ sports }: { sports: SportImages[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {sports.map((sport, index) => (
        <div className="w-[23vh] shrink-0" key={`${sport.title}-${index}`}>
          <img className="w-full h-full object-cover rounded-xl" src={sport.image} alt={sport.title} />
        </div>
      ))}
    </div>
  );
};

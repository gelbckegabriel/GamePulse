export type SportImages = {
    image: string;
    title: string;
};

export const sports = [
  { image: "home/basketball.webp", title: "Basketball Image 1" },
  { image: "home/basketball2.webp", title: "Basketball Image 2" },
  { image: "home/basketball3.webp", title: "Basketball Image 3" },
  { image: "home/basketball4.webp", title: "Basketball Image 4" },
  { image: "home/football.webp", title: "Basketball Image 1" },
  { image: "home/football2.webp", title: "Basketball Image 2" },
  { image: "home/football3.webp", title: "Basketball Image 3" },
  { image: "home/football4.webp", title: "Basketball Image 4" },
  { image: "home/football5.webp", title: "Basketball Image 5" },
  { image: "home/volleyball.webp", title: "Basketball Image 1" },
  { image: "home/volleyball2.webp", title: "Basketball Image 2" },
  { image: "home/volleyball3.webp", title: "Basketball Image 3" },
  { image: "home/volleyball4.webp", title: "Basketball Image 4" },
];

export const randomSportsSet1 = sports
  .sort(() => Math.random() - 0.5)
  .concat(sports.sort(() => Math.random() - 0.5))
  .concat(sports.sort(() => Math.random() - 0.5));

export const randomSportsSet2 = sports
  .sort(() => Math.random() - 0.5)
  .concat(sports.sort(() => Math.random() - 0.5))
  .concat(sports.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

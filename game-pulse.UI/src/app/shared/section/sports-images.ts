export type SportImages = {
  image: string;
  title: string;
};

export const mainSports = [
  { image: "/home/basketball.webp", title: "Basketball Image 1" }, // 0
  { image: "/home/football.webp", title: "Football Image 1" }, // 6
  { image: "/home/volleyball3.webp", title: "Volleyball Image 3" }, // 16
];

export const sports = [
  // { image: "/home/basketball.webp", title: "Basketball Image 1" },   // 0
  { image: "/home/basketball2.webp", title: "Basketball Image 2" }, // 1
  { image: "/home/basketball3.webp", title: "Basketball Image 3" }, // 2
  { image: "/home/basketball4.webp", title: "Basketball Image 4" }, // 3
  { image: "/home/basketball5.webp", title: "Basketball Image 4" }, // 4
  { image: "/home/basketball6.webp", title: "Basketball Image 4" }, // 5
  // { image: "/home/football.webp", title: "Football Image 1" },       // 6
  { image: "/home/football2.webp", title: "Football Image 2" }, // 7
  { image: "/home/football3.webp", title: "Football Image 3" }, // 8
  { image: "/home/football4.webp", title: "Football Image 4" }, // 9
  { image: "/home/football5.webp", title: "Football Image 5" }, // 10
  { image: "/home/football6.webp", title: "Football Image 6" }, // 11
  { image: "/home/football7.webp", title: "Football Image 7" }, // 12
  { image: "/home/football8.webp", title: "Football Image 8" }, // 13
  { image: "/home/volleyball.webp", title: "Volleyball Image 1" }, // 14
  { image: "/home/volleyball2.webp", title: "Volleyball Image 2" }, // 15
  // { image: "/home/volleyball3.webp", title: "Volleyball Image 3" },  // 16
  { image: "/home/volleyball4.webp", title: "Volleyball Image 4" }, // 17
];

// Try to solve this issue of Hydration fail (I need to don't change the state of the sports variable).
export const randomSportsSet1 = [...sports]
  .sort(() => Math.random() - 0.5)
  .concat(sports.sort(() => Math.random() - 0.5))
  .concat(sports.sort(() => Math.random() - 0.5));

export const randomSportsSet2 = [...sports]
  .sort(() => Math.random() - 0.5)
  .concat(sports.sort(() => Math.random() - 0.5))
  .concat(sports.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

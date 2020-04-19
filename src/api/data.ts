export interface Picture {
  title: string;
  url: string;
  description: string;
}

const imgNames: string[] = [
  'wallhaven-15776.jpg',
  'wallhaven-30343.jpg',
  'wallhaven-147546.jpg',
];

const pictureData: Picture[] = [];

imgNames.forEach((imgName) => {
  pictureData.push({
    title: imgName,
    url: `/pictures/${imgName}`,
    description: imgName,
  });
});

const pictureWidth = 500;
const pictureHeight = 281;

export {
  pictureData,
  pictureWidth,
  pictureHeight,
};

export interface Picture {
  id: number;
  title: string;
  url: string;
  description: string;
}

//eslint-disable-line
const imgNames: string[] = ["wallhaven-102792.jpg","wallhaven-105246.jpg","wallhaven-105274.jpg","wallhaven-115234.jpg","wallhaven-115657.jpg","wallhaven-120486.jpg","wallhaven-120487.jpg","wallhaven-123149.jpg","wallhaven-125803.jpg","wallhaven-128035.jpg","wallhaven-129421.jpg","wallhaven-133457.jpg","wallhaven-135879.jpg","wallhaven-135936.jpg","wallhaven-135938.jpg","wallhaven-136443.jpg","wallhaven-137094.jpg","wallhaven-137099.jpg","wallhaven-137101.jpg","wallhaven-141921.jpg","wallhaven-142407.jpg","wallhaven-143152.jpg","wallhaven-144038.jpg","wallhaven-144114.jpg","wallhaven-144686.jpg","wallhaven-145329.jpg","wallhaven-146199.jpg","wallhaven-147453.jpg","wallhaven-147462.jpg","wallhaven-147467.jpg","wallhaven-147474.jpg","wallhaven-147515.jpg","wallhaven-147518.jpg","wallhaven-147520.jpg","wallhaven-147521.jpg","wallhaven-147523.jpg","wallhaven-147532.jpg","wallhaven-147546.jpg","wallhaven-147551.jpg","wallhaven-147553.jpg","wallhaven-147554.jpg","wallhaven-147558.jpg","wallhaven-147568.jpg","wallhaven-147909.jpg","wallhaven-147914.jpg","wallhaven-148252.jpg","wallhaven-15776.jpg","wallhaven-30343.jpg","wallhaven-86195.jpg","wallhaven-89073.jpg","wallhaven-89115.jpg"];

const pictureData: Picture[] = [];

imgNames.forEach((imgName, index) => {
  pictureData.push({
    id: index,
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

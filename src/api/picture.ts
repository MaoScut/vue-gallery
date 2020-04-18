export interface Picture {
  title: string;
  url: string;
  description: string;
}

const fakeData: Picture[] = [
  {
    title: 'p1',
    url: '/p1.jpg',
    description: 'this is p1',
  },
];

class PictureService {
  pictures: Picture[] = [];

  getAll(): Promise<Picture[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.pictures = fakeData;
        resolve(fakeData);
      }, 1000);
    });
  }
}

export const pictureService = new PictureService();

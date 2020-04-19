import { Picture, pictureData } from './data';


class PictureService {
  pictures: Picture[] = [];

  getAll(): Promise<Picture[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.pictures = pictureData;
        resolve(pictureData);
      }, 1000);
    });
  }
}

const pictureService = new PictureService();

export default pictureService;

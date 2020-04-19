import Vue from 'vue';
import Vuex from 'vuex';
import pictureService from '@/api/picture';
import { Picture } from '@/api/data';

Vue.use(Vuex);

export interface GalleryPicture extends Picture {
  positionX: number;
  positionY: number;
  isCenter: boolean;
  rotate: number;
  zIndex: number;
}
export interface AppState {
  pictures: GalleryPicture[];
  isLoading: boolean;
}

const initialState: AppState = {
  pictures: [],
  isLoading: false,
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    startFetch(state) {
      state.isLoading = true;
      state.pictures = [];
    },
    receiveData(state: AppState, data: Picture[]) {
      state.pictures = data.map((p) => ({
        ...p,
        positionX: 0,
        positionY: 0,
        isCenter: false,
        rotate: 0,
        zIndex: 1,
      }));
      state.isLoading = false;
    },
    spread(state: AppState, payload: { xAxisMax: number; yAxisMax: number }) {
      state.pictures = state.pictures.map((p) => ({
        ...p,
        positionX: Math.random() * payload.xAxisMax,
        positionY: Math.random() * payload.yAxisMax,
        rotate: (Math.random() * 70) * (Math.random() > 0.5 ? 1 : -1),
      }));
    },
    makeCenter(state: AppState, payload: {
      xAxisMax: number;
      yAxisMax: number;
      id: number;
    }) {
      state.pictures = state.pictures.map((p) => {
        if (p.id === payload.id) {
          return {
            ...p,
            positionX: payload.xAxisMax / 2,
            positionY: payload.yAxisMax / 2,
            rotate: 0,
            zIndex: 2,
          };
        }
        return {
          ...p,
          zIndex: 1,
          positionX: Math.random() * payload.xAxisMax,
          positionY: Math.random() * payload.yAxisMax,
          rotate: (Math.random() * 70) * (Math.random() > 0.5 ? 1 : -1),
        };
      });
    },
  },
  actions: {
    fetchData(context) {
      // todo: 没有依赖注入,怎么单元测试?
      context.commit('startFetch');
      return pictureService.getAll().then((data) => {
        context.commit('receiveData', data);
      });
    },
  },
  modules: {
  },
});

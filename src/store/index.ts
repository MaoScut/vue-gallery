import Vue from 'vue';
import Vuex from 'vuex';
import pictureService from '@/api/picture';
import { Picture } from '@/api/data';

Vue.use(Vuex);

export interface AppState {
  pictures: Picture[];
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
      state.pictures = data;
      state.isLoading = false;
    },
  },
  actions: {
    fetchData(context) {
      // todo: 没有依赖注入,怎么单元测试?
      context.commit('startFetch');
      pictureService.getAll().then((data) => {
        context.commit('receiveData', data);
      });
    },
  },
  modules: {
  },
});

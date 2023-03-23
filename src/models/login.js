import { logins } from '../services/login';
export default {
  namespace: 'login',

  state: {
    menu: [],
  },

  effects: {
    *login({ payload: userValue, callback }, { call, put, select }) {
      const response = yield call(logins, { ...userValue });
      // yield put({
      //   //public是写在下面reducers里,携带的参数是固定的(也就是修改数据)
      //   type: 'public',
      //   payload: { ...response, name: 'menu' },
      // });
      if (response.data.code) {
        if (callback) callback(response.data.code);
      }
    },
  },

  reducers: {
    public(state, action) {
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    },
    clearData() {
      return {
        menu: [],
      };
    },
  },
};

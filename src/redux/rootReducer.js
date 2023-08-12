import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import toursReducer from './slices/tours';
import {clearStore} from './util';

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const toursPersistConfig = {
  key: 'tours',
  storage,
  keyPrefix: 'redux-',
  // whitelist: [],
};

const appReducer = combineReducers({
  tours: toursReducer,
  tours: persistReducer(toursPersistConfig, toursReducer),
});

const rootReducer = (state, action) => {
  // TODO: currently this doesn't clear with persist, only clears temporary
  if (action.type === clearStore.type) {
    storage.removeItem('persist:root');
    storage.removeItem('persist:tours');

    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export {rootPersistConfig, rootReducer};

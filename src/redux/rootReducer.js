import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import toursReducer from './slices/tours';
import destinationsReducer from './slices/destinations';
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

const destinationsPersistConfig = {
  key: 'destinations',
  storage,
  keyPrefix: 'redux-',
  // whitelist: [],
};

const appReducer = combineReducers({
  tours: toursReducer,
  destinations: destinationsReducer,
  // tours: persistReducer(toursPersistConfig, toursReducer),
  // destinations: persistReducer(destinationsPersistConfig, destinationsReducer),
});

const rootReducer = (state, action) => {
  // TODO: currently this doesn't clear with persist, only clears temporary
  if (action.type === clearStore.type) {
    storage.removeItem('persist:root');
    storage.removeItem('persist:tours');
    storage.removeItem('persist:destinations');

    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export {rootPersistConfig, rootReducer};

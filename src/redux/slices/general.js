import {getDifferenceOfDaysBetweenTwoDates} from '@/utils/common';
import {
  addNewDocumentToCollection,
  getAllDocumentsFromCollection,
} from '@/utils/firebase/firestore';
import {createSlice} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  isLoading: null,
};

const slice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;
const actions = slice.actions;

export const createNewMessage =
  ({name, email, message}) =>
  async (dispatch, getState) => {
    try {
      const state = getState();
      const document = {
        name,
        email,
        message,
      };
      await addNewDocumentToCollection({
        document,
        collectionName: 'messages',
      });
      dispatch(actions.stopLoading());
    } catch (error) {
      dispatch(actions.stopLoading());
      dispatch(actions.setError(error));
    }
  };

// Filter Destinations
export const filterDestinationsList = ({filterByTypes, list}) => {
  let destinations = list;

  if (filterByTypes)
    if (filterByTypes.length > 0)
      if (filterByTypes.includes('all')) destinations = destinations;
      else {
        destinations = destinations?.filter(({type}) =>
          filterByTypes.includes(type)
        );
      }

  return destinations;
};

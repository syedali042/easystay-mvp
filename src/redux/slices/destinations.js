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
  list: [],
  new: {},
};

const slice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setDestinationsList(state, action) {
      state.list = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setNewDestinationFieldValue(state, action) {
      const {field, value} = action.payload;
      state.new[field] = value;
    },
    addDestinationToList(state, action) {
      let list = state.list;
      list.push(action.payload);
      state.list = list;
    },
    resetNewDestination(state) {
      state.new = {};
    },
  },
});

// Reducer
export default slice.reducer;
const actions = slice.actions;

// fetch all destinations
export const fetchAllDestinations = () => async (dispatch) => {
  try {
    dispatch(actions.startLoading());
    const allDestinations = await getAllDocumentsFromCollection({
      collectionName: 'destinations',
    });
    dispatch(actions.setDestinationsList(allDestinations));
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.stopLoading());
    dispatch(actions.setError(error));
  }
};

//
export const getDestinationsList = (state) => state.destinations.list;

// Get Tour By Id
export const getDestinationById =
  ({destinationId}) =>
  (state) =>
    state.destinations.list.find(({id}) => id == destinationId);

// Set New Tour Value
export const setNewDestinationFieldValue =
  ({field, value}) =>
  async (dispatch, getState) => {
    dispatch(actions.startLoading());
    try {
      dispatch(actions.setNewDestinationFieldValue({field, value}));
      dispatch(actions.stopLoading());
    } catch (error) {
      dispatch(actions.stopLoading());
      dispatch(actions.hasError(error));
      throw error;
    }
  };

export const newDestinationFormValues = (state) => state.destinations.new;

export const createNewDestination = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const {new: document} = state.destinations;
    const newDestination = await addNewDocumentToCollection({
      document,
      collectionName: 'destinations',
    });
    dispatch(actions.addDestinationToList(newDestination));
    dispatch(actions.resetNewDestination());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.stopLoading());
    dispatch(actions.setError(error));
  }
};

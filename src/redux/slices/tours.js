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
  startingFrom: null,
  endingAt: null,
  new: {
    photos: [],
    type: '',
    title: '',
    description: '',
    departure: {
      date: new Date(),
      from: '',
    },
    arrival: {
      date: new Date(),
      from: '',
    },
    includings: [],
    excludings: [],
    map: {
      fullAddress: '',
      url: '',
    },
    price: {
      person: 0,
      couple: 0,
    },
    host: '',
    likes: 0,
  },
};

const slice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setToursList(state, action) {
      const tours = action.payload;
      state.list = tours;
      const sortedTours = tours.sort((a, b) => {
        const {
          departure: {date: departureDateA},
        } = a;
        const {
          departure: {date: departureDateB},
        } = b;
        return new Date(departureDateB) - new Date(departureDateA);
      });

      state.startingFrom = sortedTours[sortedTours.length - 1].departure.date;
      state.endingAt = sortedTours[0].departure.date;
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
    setNewTourFieldValue(state, action) {
      const {field, value} = action.payload;
      state.new[field] = value;
    },
    setNewTourSubFieldValue(state, action) {
      const {field, subField, value} = action.payload;
      state.new[field][subField] = value;
    },
    addTourToList(state, action) {
      let list = state.list;
      list.push(action.payload);
      state.list = list;
    },
    resetNewTour(state) {
      state.new = {
        photos: [],
        type: '',
        title: '',
        description: '',
        departure: {
          date: new Date(),
          from: '',
        },
        arrival: {
          date: new Date(),
          from: '',
        },
        includings: [],
        excludings: [],
        map: {
          fullAddress: '',
          url: '',
        },
        price: {
          person: 0,
          couple: 0,
        },
        host: '',
        likes: 0,
      };
    },
  },
});

// Reducer
export default slice.reducer;
const actions = slice.actions;

// fetch all tours
export const fetchAllTours = () => async (dispatch) => {
  try {
    dispatch(actions.startLoading());
    const allTours = await getAllDocumentsFromCollection({
      collectionName: 'tours',
    });
    dispatch(actions.setToursList(allTours));
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.stopLoading());
    dispatch(actions.setError(error));
  }
};

//
export const getToursList = (state) => state.tours.list;

// Filtered Tours
export const filterToursList = ({
  filterByStartDate,
  filterByEndDate,
  filterByPrice,
  filterByNumberOfDays,
  list,
}) => {
  let tours = list;

  if (filterByStartDate)
    tours = tours?.filter(
      ({departure: {date}}) => new Date(date) >= new Date(filterByStartDate)
    );

  if (filterByEndDate)
    tours = tours?.filter(
      ({departure: {date}}) => new Date(date) <= new Date(filterByEndDate)
    );

  if (filterByPrice) {
    const {start, end} = filterByPrice;
    if (start)
      tours = tours?.filter(
        ({price: {person}}) => parseInt(person) >= parseInt(start)
      );

    if (end)
      tours = tours?.filter(
        ({price: {person}}) => parseInt(person) <= parseInt(end)
      );
  }

  if (filterByNumberOfDays)
    if (filterByNumberOfDays.length > 0)
      tours = tours?.filter(
        ({departure: {date: startDate}, arrival: {date: endDate}}) =>
          filterByNumberOfDays.includes(
            getDifferenceOfDaysBetweenTwoDates({endDate, startDate})
          )
      );

  return tours;
};

// Get Tours Starting Date
export const getStartingDate = (state) => state.tours.startingFrom;

// Get Tours Ending Date
export const getEndingDate = (state) => state.tours.endingAt;

// Get Tour By Id
export const getTourById =
  ({tourId}) =>
  (state) =>
    state.tours.list.find(({id}) => id == tourId);

// Set New Tour Value
export const setNewTourFieldValue =
  ({field, value}) =>
  async (dispatch, getState) => {
    dispatch(actions.startLoading());
    try {
      dispatch(actions.setNewTourFieldValue({field, value}));
      dispatch(actions.stopLoading());
    } catch (error) {
      dispatch(actions.stopLoading());
      dispatch(actions.hasError(error));
      throw error;
    }
  };

// Set New Tour Value
export const setNewTourSubFieldValue =
  ({field, subField, value}) =>
  async (dispatch, getState) => {
    dispatch(actions.startLoading());
    try {
      dispatch(actions.setNewTourSubFieldValue({field, subField, value}));
      dispatch(actions.stopLoading());
    } catch (error) {
      dispatch(actions.stopLoading());
      dispatch(actions.hasError(error));
      throw error;
    }
  };

export const newTourFormValues = (state) => state.tours.new;

export const createNewTour = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const {new: document} = state.tours;
    const createNewTour = await addNewDocumentToCollection({
      document,
      collectionName: 'tours',
    });
    dispatch(actions.addTourToList(createNewTour));
    dispatch(actions.resetNewTour());
    dispatch(actions.stopLoading());
  } catch (error) {
    dispatch(actions.stopLoading());
    dispatch(actions.setError(error));
  }
};

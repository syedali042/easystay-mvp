import {getAllDocumentsFromCollection} from '@/utils/firebase/firestore';
import {createSlice} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  isLoading: null,
  list: null,
  startingFrom: null,
  endingAt: null,
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
  },
});

// Reducer
export default slice.reducer;
const actions = slice.actions;

// fetch all tours
export const fetchAllTours = () => async (dispatch, getState) => {
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

// Get Filtered Tours
export const getToursList =
  ({filterByStartDate, filterByEndDate, filterByPrice, filterByNumberOfDays}) =>
  (state) => {
    const toursState = state.tours;
    let tours = toursState.list;

    if (filterByStartDate)
      tours = tours.filter(
        ({departure: {date}}) => new Date(date) >= new Date(filterByStartDate)
      );

    if (filterByEndDate)
      tours = tours.filter(
        ({arrival: {date}}) => new Date(date) <= new Date(filterByEndDate)
      );

    if (filterByPrice) {
      const {start, end} = filterByPrice;
      if (start)
        tours = tours.filter(
          ({price: {person}}) => parseInt(person) >= parseInt(start)
        );

      if (end)
        tours = tours.filter(
          ({price: {person}}) => parseInt(person) <= parseInt(end)
        );
    }

    if (filterByNumberOfDays)
      tours = tours.filter(
        ({departure: {date: startDate}, arrival: {date: endDate}}) =>
          getDifferenceOfDaysBetweenTwoDates({endDate, startDate}) ==
          parseInt(filterByNumberOfDays)
      );

    return tours;
  };

// Get Tours Starting Date
export const getStartingDate = (state) => state.tours.startingFrom;

// Get Tours Ending Date
export const getEndingDate = (state) => state.tours.endingAt;

// Should Be Replaced From Here
const getDifferenceOfDaysBetweenTwoDates = ({startDate, endDate}) => {
  const end = new Date(endDate);
  const start = new Date(startDate);
  const timeDifference = end - start;
  const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return differenceInDays;
};

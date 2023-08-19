import {getDifferenceOfDaysBetweenTwoDates} from '@/utils/common';
import {getAllDocumentsFromCollection} from '@/utils/firebase/firestore';
import {createSlice} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  error: null,
  isLoading: null,
  list: [],
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
export const fetchAllTours = () => async (dispatch) => {
  try {
    dispatch(actions.startLoading());
    const allTours = await getAllDocumentsFromCollection({
      collectionName: 'tours',
    });
    dispatch(actions.setToursList(customList));
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
    state.tours.list.find(({id}) => tourId);

const customList = [
  {
    id: 'bOR5GLQvrA0FMi1LEYP5',
    description: 'Not available',
    photos: [
      'https://img.freepik.com/premium-photo/long-shot-man-exploring-nature_23-2149884252.jpg?w=996',
      'https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?w=996&t=st=1692448422~exp=1692449022~hmac=274e3d1bf0f2369acf5d2697708ed1b5e1b4275ceffe7a79cff38e0a736ff9f0',
      'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=996&t=st=1692448444~exp=1692449044~hmac=7ffcbfb2e2d6adb66a6f8c2d304cbca57506a52d170d93bb712950341aaf177c',
      'https://img.freepik.com/premium-photo/beautiful-sunset-with-rocks-along-beach_103127-640.jpg?w=996',
    ],
    departure: {
      date: 'Sept 25, 2023',
      from: 'Lahore, Pakistan',
    },
    excludings: [
      'Not available',
      'Not available',
      'Not available',
      'Not available',
    ],
    arrival: {
      date: 'Sept 30, 2023',
      from: 'Naltar Valley',
    },
    map: {
      fullAddress: 'Naltar Valley, GB, Pakistan',
      url: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Naltar+Valley',
    },
    price: {
      person: '300',
      couple: '800',
    },
    includings: [
      'Not available',
      'Not available',
      'Not available',
      'Not available',
    ],
    host: 'Waqar Ul Hassan',
    title: '5 days tour to naltar valley ',
    type: 'Group',
  },
];

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

// Should Be Replaced From Here
const getDifferenceOfDaysBetweenTwoDates = ({startDate, endDate}) => {
  const end = new Date(endDate);
  const start = new Date(startDate);
  const timeDifference = end - start;
  const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return differenceInDays;
};

const customList = [
  {
    id: 'bOR5GLQvrA0FMi1LEYP5',
    description: 'Not available',
    photos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mY9fDlesTkg1hYTujGkdu_5NiuX21-BVCg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mY9fDlesTkg1hYTujGkdu_5NiuX21-BVCg&usqp=CAU',
    ],
    departure: {
      date: 'Sept 25, 2023',
      from: 'Lahore, Pakistan',
    },
    excludings: ['Not available'],
    arrival: {
      date: 'Sept 30, 2023',
      from: 'Naltar Valley',
    },
    map: '#',
    price: {
      person: '300',
      couple: '800',
    },
    includings: ['Not available'],
    host: 'Waqar Ul Hassan',
    title: '5 days tour to naltar valley ',
  },
  {
    id: '8Budhrb9yQtTED0VcDmV',
    arrival: {
      from: 'Naltar Valley',
      date: 'Sept 23, 2023',
    },
    departure: {
      from: 'Gulberg, Lahore',
      date: 'Sept 18, 2023',
    },
    title: '5 days at Naltar Valley',
    includings: ['Not Available', 'Not Available', 'Not Available'],
    photos: [
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
    ],
    host: 'Waqar Ul Hassan',
    map: 'https://www.google.com/maps/place/Easy+Stay/@31.3922254,-3.6805672,3z/data=!4m10!1m2!2m1!1sEasySTay!3m6!1s0x39190736ee8fd78d:0x372cf2282ce16312!8m2!3d31.3922254!4d74.3663078!15sCghFYXN5U1RheZIBGnRvdXJpc3RfaW5mb3JtYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11rc46ddc6?entry=ttu',
    description: 'Not Available',
    excludings: ['Not Available', 'Not Available', 'Not Available'],
    price: {
      couple: 500,
      person: 200,
    },
  },
  {
    id: '8Budhrb9yQtTED0VcDmX',
    arrival: {
      from: 'Naltar Valley',
      date: 'Sept 13, 2023',
    },
    departure: {
      from: 'Gulberg, Lahore',
      date: 'Sept 10, 2023',
    },
    title: '3 days at Naltar Valley',
    includings: ['Not Available', 'Not Available', 'Not Available'],
    photos: [
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
    ],
    host: 'Waqar Ul Hassan',
    map: 'https://www.google.com/maps/place/Easy+Stay/@31.3922254,-3.6805672,3z/data=!4m10!1m2!2m1!1sEasySTay!3m6!1s0x39190736ee8fd78d:0x372cf2282ce16312!8m2!3d31.3922254!4d74.3663078!15sCghFYXN5U1RheZIBGnRvdXJpc3RfaW5mb3JtYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11rc46ddc6?entry=ttu',
    description: 'Not Available',
    excludings: ['Not Available', 'Not Available', 'Not Available'],
    price: {
      couple: 7000,
      person: 2000,
    },
  },
  {
    id: '8Budhrb9yQtTED0VcDmY',
    arrival: {
      from: 'Naltar Valley',
      date: 'Sept 12, 2023',
    },
    departure: {
      from: 'Gulberg, Lahore',
      date: 'Sept 9, 2023',
    },
    title: '3 days at Naltar Valley',
    includings: ['Not Available', 'Not Available', 'Not Available'],
    photos: [
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
    ],
    host: 'Waqar Ul Hassan',
    map: 'https://www.google.com/maps/place/Easy+Stay/@31.3922254,-3.6805672,3z/data=!4m10!1m2!2m1!1sEasySTay!3m6!1s0x39190736ee8fd78d:0x372cf2282ce16312!8m2!3d31.3922254!4d74.3663078!15sCghFYXN5U1RheZIBGnRvdXJpc3RfaW5mb3JtYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11rc46ddc6?entry=ttu',
    description: 'Not Available',
    excludings: ['Not Available', 'Not Available', 'Not Available'],
    price: {
      couple: 5000,
      person: 2000,
    },
  },
  {
    id: '8Budhrb9yQtTED0VcDmZ',
    arrival: {
      from: 'Naltar Valley',
      date: 'Sept 11, 2023',
    },
    departure: {
      from: 'Gulberg, Lahore',
      date: 'Sept 8, 2023',
    },
    title: '3 days at Naltar Valley',
    includings: ['Not Available', 'Not Available', 'Not Available'],
    photos: [
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
    ],
    host: 'Waqar Ul Hassan',
    map: 'https://www.google.com/maps/place/Easy+Stay/@31.3922254,-3.6805672,3z/data=!4m10!1m2!2m1!1sEasySTay!3m6!1s0x39190736ee8fd78d:0x372cf2282ce16312!8m2!3d31.3922254!4d74.3663078!15sCghFYXN5U1RheZIBGnRvdXJpc3RfaW5mb3JtYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11rc46ddc6?entry=ttu',
    description: 'Not Available',
    excludings: ['Not Available', 'Not Available', 'Not Available'],
    price: {
      couple: 5000,
      person: 1000,
    },
  },
  {
    id: '8Budhrb9yQtTED0VcDXZ',
    arrival: {
      from: 'Naltar Valley',
      date: 'Sept 17, 2023',
    },
    departure: {
      from: 'Gulberg, Lahore',
      date: 'Sept 10, 2023',
    },
    title: '7 days at Naltar Valley',
    includings: ['Not Available', 'Not Available', 'Not Available'],
    photos: [
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
    ],
    host: 'Waqar Ul Hassan',
    map: 'https://www.google.com/maps/place/Easy+Stay/@31.3922254,-3.6805672,3z/data=!4m10!1m2!2m1!1sEasySTay!3m6!1s0x39190736ee8fd78d:0x372cf2282ce16312!8m2!3d31.3922254!4d74.3663078!15sCghFYXN5U1RheZIBGnRvdXJpc3RfaW5mb3JtYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11rc46ddc6?entry=ttu',
    description: 'Not Available',
    excludings: ['Not Available', 'Not Available', 'Not Available'],
    price: {
      couple: 15000,
      person: 10000,
    },
  },
  {
    id: '8Budhrb9yQtTED0VcDwZ',
    arrival: {
      from: 'Naltar Valley',
      date: 'Sept 24, 2023',
    },
    departure: {
      from: 'Gulberg, Lahore',
      date: 'Sept 10, 2023',
    },
    title: '14 days at Naltar Valley',
    includings: ['Not Available', 'Not Available', 'Not Available'],
    photos: [
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
      'https://c0.wallpaperflare.com/preview/382/163/781/dug-out-pool-hotel-poolside-resort.jpg',
    ],
    host: 'Waqar Ul Hassan',
    map: 'https://www.google.com/maps/place/Easy+Stay/@31.3922254,-3.6805672,3z/data=!4m10!1m2!2m1!1sEasySTay!3m6!1s0x39190736ee8fd78d:0x372cf2282ce16312!8m2!3d31.3922254!4d74.3663078!15sCghFYXN5U1RheZIBGnRvdXJpc3RfaW5mb3JtYXRpb25fY2VudGVy4AEA!16s%2Fg%2F11rc46ddc6?entry=ttu',
    description: 'Not Available',
    excludings: ['Not Available', 'Not Available', 'Not Available'],
    price: {
      couple: 25000,
      person: 15000,
    },
  },
];

import * as Yup from 'yup';

// Login Schema
export const HomeSearchFormSchema = Yup.object().shape({
  location: Yup.string().required('Please choose a destination'),
  datesRange: Yup.object().shape({
    startDate: Yup.date().required(
      'Please choose from when you are planning to go.'
    ),
    endDate: Yup.string().nullable(),
  }),
  guests: Yup.object().shape({
    adults: Yup.number().min(1).required('Please select adults number'),
    children: Yup.number().required('Please select children number'),
    infants: Yup.number().required('Please select infants number'),
  }),
});

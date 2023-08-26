// For-Ali: Move Types Here
export const TOUR_TYPES = {};

export const DESTINATIONS_TYPES = {
  city: {
    label: 'City',
    value: 'city',
  },
  lake: {
    label: 'Lake',
    value: 'lake',
  },
  mountain: {
    label: 'Mountain',
    value: 'mountain',
  },
  forest: {
    label: 'Forest',
    value: 'forest',
  },
  river: {
    label: 'River',
    value: 'river',
  },
  valley: {
    label: 'Valley',
    value: 'valley',
  },
  pass: {
    label: 'Pass',
    value: 'pass',
  },
  desert: {
    label: 'Desert',
    value: 'desert',
  },
  island: {
    label: 'Island',
    value: 'island',
  },
};

export const DESTINATIONS_TYPES_ARRAY = Object.keys(DESTINATIONS_TYPES).map(
  (key) => [
    key,
    DESTINATIONS_TYPES[key]['label'],
    DESTINATIONS_TYPES[key]['value'],
  ]
);

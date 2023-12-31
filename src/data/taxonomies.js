import __taxonomies from './jsons/__taxonomies.json';
import __stayTaxonomies from './jsons/__stayTaxonomies.json';
import __experiencesTaxonomies from './jsons/__experiencesTaxonomies.json';

const DEMO_CATEGORIES = __taxonomies.map((item) => ({
  ...item,
  taxonomy: 'category',
  href: item.href,
}));

const DEMO_TAGS = __taxonomies.map((item) => ({
  ...item,
  taxonomy: 'tag',
  href: item.href,
}));

//

const DEMO_STAY_CATEGORIES = __stayTaxonomies.map((item) => ({
  ...item,
  taxonomy: 'category',
  listingType: 'stay',
  href: item.href,
}));
//
const DEMO_EXPERIENCES_CATEGORIES = __experiencesTaxonomies.map((item) => ({
  ...item,
  taxonomy: 'category',
  listingType: 'experiences',
  href: item.href,
}));

export {
  DEMO_CATEGORIES,
  DEMO_TAGS,
  DEMO_STAY_CATEGORIES,
  DEMO_EXPERIENCES_CATEGORIES,
};

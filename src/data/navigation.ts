import {MegamenuItem, NavItemType} from '@/shared/Navigation/NavigationItem';
import ncNanoId from '@/utils/ncNanoId';
import {Route} from '@/routers/types';
import __megamenu from './jsons/__megamenu.json';

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Company',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'App Name',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'City',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Contruction',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Country',
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Online booking',
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Real estate',
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Home 3',
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  {id: ncNanoId(), href: '/', name: 'Blog page'},
  {id: ncNanoId(), href: '/' as Route, name: 'Blog single'},
  {id: ncNanoId(), href: '/', name: 'About'},
  {id: ncNanoId(), href: '/', name: 'Contact us'},
  {id: ncNanoId(), href: '/', name: 'Login'},
  {id: ncNanoId(), href: '/', name: 'Signup'},
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/' as Route,
    name: 'Add listing',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 1',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 2',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 3',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 4',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 5',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 6',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 7',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 8',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 9',
      },
      {
        id: ncNanoId(),
        href: '/' as Route,
        name: 'Add listing 10',
      },
    ],
  },
  //
  {id: ncNanoId(), href: '/', name: 'Checkout'},
  {id: ncNanoId(), href: '/', name: 'Pay done'},
  //
  {id: ncNanoId(), href: '/', name: 'Author page'},
  {id: ncNanoId(), href: '/', name: 'Account page'},
  //
  {
    id: ncNanoId(),
    href: '/',
    name: 'Subscription',
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Home',
    type: 'dropdown',
    children: demoChildMenus,
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Five columns',
    type: 'megaMenu',
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Listing Page',
    type: 'dropdown',
    children: [
      {
        id: ncNanoId(),
        href: '/',
        name: 'Stay listings',
        type: 'dropdown',
        children: [
          {id: ncNanoId(), href: '/', name: 'Stay page'},
          {
            id: ncNanoId(),
            href: '/',
            name: 'Stay page (map)',
          },
          {id: ncNanoId(), href: '/', name: 'Stay Detail'},
        ],
      },

      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Experiences listings',
        type: 'dropdown',
        children: [
          {
            id: ncNanoId(),
            href: '/',
            name: 'Experiences page',
          },
          {
            id: ncNanoId(),
            href: '/',
            name: 'Experiences page (map)',
          },
          {
            id: ncNanoId(),
            href: '/',
            name: 'Experiences Detail',
          },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Cars listings',
        type: 'dropdown',
        children: [
          {id: ncNanoId(), href: '/', name: 'Cars page'},
          {id: ncNanoId(), href: '/', name: 'Cars page (map)'},
          {id: ncNanoId(), href: '/', name: 'Car Detail'},
        ],
      },

      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Real Estate Listings',
        type: 'dropdown',
        children: [
          {
            id: ncNanoId(),
            href: '/',
            name: 'Real Estate Listings',
          },
          {
            id: ncNanoId(),
            href: '/',
            name: 'Real Estate Maps',
          },
        ],
      },
      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Flights listings',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Templates',
    type: 'dropdown',
    children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: '/',
    name: 'Other pages',
    type: 'dropdown',
    children: otherPageChildMenus,
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Home',
    type: 'dropdown',
    children: demoChildMenus,
    isNew: true,
  },

  //
  {
    id: ncNanoId(),
    href: '/',
    name: 'Listing pages',
    children: [
      {id: ncNanoId(), href: '/', name: 'Stay listings'},
      {
        id: ncNanoId(),
        href: '/',
        name: 'Stay listings (map)',
      },
      {id: ncNanoId(), href: '/', name: 'Stay detail'},

      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Experiences listings',
      },
      {
        id: ncNanoId(),
        href: '/',
        name: 'Experiences (map)',
      },
      {
        id: ncNanoId(),
        href: '/',
        name: 'Experiences detail',
      },
    ],
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Listing pages',
    children: [
      {id: ncNanoId(), href: '/', name: 'Cars listings'},
      {id: ncNanoId(), href: '/', name: 'Cars listings (map)'},
      {id: ncNanoId(), href: '/', name: 'Car detail'},

      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Real estate listings',
      },
      {
        id: ncNanoId(),
        href: '/',
        name: 'Real estate (map)',
      },
      //
      {
        id: ncNanoId(),
        href: '/',
        name: 'Flights listings',
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: '/',
    name: 'Templates',
    type: 'dropdown',
    children: templatesChildrenMenus,
  },

  //
  {
    id: ncNanoId(),
    href: '/',
    name: 'Other pages',
    type: 'dropdown',
    children: otherPageChildMenus,
  },
];

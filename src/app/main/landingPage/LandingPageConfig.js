import LandingPage from './LandingPage';
import ExamplePage from '../example/Example';
// import { useSelector } from 'react-redux';

// const user = useSelector(({ auth }) => auth.user);

const LandingPageConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: '/landingpage',
      // component: (user.role ? ExamplePage : LandingPage),
      component: LandingPage
    },
  ],
};

export default LandingPageConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/

import React from 'react';
import { ReactComponent as DashboardIcon } from 'images/icons/line/browser.svg';
import { ReactComponent as PeopleIcon } from 'images/icons/line/people.svg';
import { ReactComponent as DepartmentsIcon } from 'images/icons/line/clipboard.svg';
import { ReactComponent as ActivitiesIcon } from 'images/icons/line/flash.svg';
import { ReactComponent as HolidaysIcon } from 'images/icons/line/checkmark-circle-2.svg';
import { ReactComponent as EventsIcon } from 'images/icons/line/fire.svg';
import { ReactComponent as ReportIcon } from 'images/icons/line/alert-circle.svg';

export default [
  {
    icon: <DashboardIcon />,
    alt: 'Product Mix',
    link: '/'
  },
  {
    icon: <PeopleIcon />,
    alt: 'Order History',
    link: '/orders'
  },
  {
    icon: <DepartmentsIcon />,
    alt: 'Hourly Sales',
    link: '/sales'
  },
  {
    icon: <PeopleIcon />,
    alt: 'Payment Summary',
    link: '/payments'
  },
  {
    icon: <ActivitiesIcon />,
    alt: 'Operations',
    link: '/operations'
  },
  {
    icon: <HolidaysIcon />,
    alt: 'Holidays',
    link: '/holidays'
  },
  {
    icon: <EventsIcon />,
    alt: 'Sales Summary',
    link: '/sales-summary'
  },
  {
    icon: <ReportIcon />,
    alt: 'Other Reports',
    link: '/reports'
  }
];

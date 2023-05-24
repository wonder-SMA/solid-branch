import { ComponentType } from 'react';
import ListPage from '../pages/list';
import SummaryPage from '../pages/summary';

export interface IRoute {
  path?: string;
  Component: ComponentType;
}

export enum RouteNames {
  SUMMARY = '/',
  LIST = '/navigator',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.SUMMARY,
    Component: SummaryPage,
  },
  {
    path: RouteNames.LIST,
    Component: ListPage,
  },
];

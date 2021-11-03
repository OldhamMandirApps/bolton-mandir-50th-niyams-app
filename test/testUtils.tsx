import React from 'react';
import { Route, Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { NiyamData } from '../src/types';

export const NiyamBuilder = (name: string, progress: number, target: number): NiyamData => {
  return {
    name,
    progress,
    target,
  };
};

interface RenderWithRouterProps {
  route?: string;
  history?: MemoryHistory;
}

export const renderWithRouter = (
  ui: React.ReactNode,
  routePattern: string,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) }: RenderWithRouterProps = {},
) => {
  return {
    ...render(
      <Router history={history}>
        <Route path={routePattern}>{ui}</Route>
      </Router>,
    ),
    history,
  };
};

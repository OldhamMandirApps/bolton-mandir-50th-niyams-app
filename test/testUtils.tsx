import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { NiyamData } from '../src/types';

export const NiyamBuilder = (label: string, progress: number, target: number): NiyamData => {
  return {
    label,
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
      <MemoryRouter initialEntries={[route]}>
        <Route path={routePattern}>{ui}</Route>
      </MemoryRouter>,
    ),
    history,
  };
};

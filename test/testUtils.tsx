import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
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
}

export const renderWithRouter = (
  ui: React.ReactNode,
  routePattern: string,
  { route = '/' }: RenderWithRouterProps = {},
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={routePattern} element={<>{ui}</>} />
        </Routes>
      </MemoryRouter>,
    ),
  };
};

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../src/pages/LoginPage';

it('Login page should render.', () => {
  render(<LoginPage />, { wrapper: BrowserRouter });
  expect(screen.getByText(/already have an account?/i)).toBeInTheDocument();
});

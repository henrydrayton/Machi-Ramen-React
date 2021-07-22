import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders learn react link', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Phone Number/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About page text', () => {
  render(<About />);
  const linkElement = screen.getByText(/Our Origins/i);
  expect(linkElement).toBeInTheDocument();
});

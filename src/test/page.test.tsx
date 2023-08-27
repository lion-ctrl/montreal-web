import { render, screen } from '@testing-library/react';
import HomePage from 'app/page';

describe('<HomePage />', () => {
  it('should render correctly', () => {
    render(<HomePage />);

    expect(
      screen.getByText(
        /Montreal siempre estara alli en tus momentos mas felices./i
      )
    ).toBeInTheDocument();
  });
});

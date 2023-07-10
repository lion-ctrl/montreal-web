import { render, screen } from '@testing-library/react';
import HomePage from 'app/page';

describe('<HomePage />', () => {
  it('should render correctly', () => {
    render(<HomePage />);

    expect(
      screen.getByText(
        /Find in-depth information about Next.js features and API./i
      )
    ).toBeInTheDocument();
  });
});

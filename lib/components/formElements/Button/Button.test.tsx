import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '.';

const mockOnClick = jest.fn();
const mockOnMouseEnter = jest.fn();
const mockOnMouseLeave = jest.fn();
const mockOnFocus = jest.fn();
const mockOnBlur = jest.fn();

describe('Button component', () => {
  it('renders a button by default', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it("renders a custom component when 'as' prop is provided", () => {
    render(
      <Button as="a" href="/test">
        Click Me
      </Button>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Click Me');
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('applies additional props', () => {
    render(
      <Button data-testid="custom-button" disabled>
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
  });

  it('applies the additional className', () => {
    render(<Button className="additional">Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass(
      'additional ui-text-white ui-bg-blue-700 hover:ui-bg-blue-800 focus:ui-ring-4 focus:ui-outline-none focus:ui-ring-blue-300 ui-font-medium ui-rounded-lg ui-text-sm ui-px-5 ui-py-2.5 ui-text-center dark:ui-bg-blue-600 dark:hover:ui-bg-blue-700 dark:focus:ui-ring-blue-800',
    );
  });

  it('applies the events triggered by the user', async () => {
    render(
      <Button
        onClick={mockOnClick}
        onBlur={mockOnBlur}
        onMouseEnter={mockOnMouseEnter}
        onMouseLeave={mockOnMouseLeave}
        onFocus={mockOnFocus}
      >
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByRole('button');
    expect(mockOnClick).toHaveBeenCalledTimes(0);
    expect(mockOnFocus).toHaveBeenCalledTimes(0);
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(0);
    expect(mockOnMouseLeave).toHaveBeenCalledTimes(0);

    await userEvent.click(buttonElement); // Simulate click on the button
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    await userEvent.tab(); // Simulate focusing on the button
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(1);

    await userEvent.tab(); // Simulate blurring (focus leaves the button)
    expect(mockOnBlur).toHaveBeenCalledTimes(1);

    await userEvent.hover(buttonElement); // Simulate mouse entering the button
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(2);

    await userEvent.unhover(buttonElement); // Simulate mouse leaving the button
    expect(mockOnMouseLeave).toHaveBeenCalledTimes(1);
  });
});

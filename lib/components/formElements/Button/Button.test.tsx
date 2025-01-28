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
    expect(buttonElement).toHaveClass('ui-rounded-lg');
    expect(buttonElement).toHaveClass('ui-font-medium');
    expect(buttonElement).toHaveClass('ui-bg-blue-700');
  });

  it("renders a link when 'as' prop is 'a'", () => {
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

  it("renders a input button when 'as' prop is 'input'", () => {
    render(
      <Button as="input" data-testid="input">
        Click Me
      </Button>,
    );
    const linkElement = screen.getByTestId('input');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveValue('Click Me');
    expect(linkElement).toHaveAttribute('type', 'button');
  });

  it("renders a input submit when 'as' prop is 'input' and type is 'submit'", () => {
    render(
      <Button as="input" type="submit" data-testid="input">
        Click Me
      </Button>,
    );
    const linkElement = screen.getByTestId('input');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveValue('Click Me');
    expect(linkElement).toHaveAttribute('type', 'submit');
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
    expect(buttonElement).toHaveClass('additional');
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

    await userEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    await userEvent.tab();
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(1);

    await userEvent.tab();
    expect(mockOnBlur).toHaveBeenCalledTimes(1);

    await userEvent.hover(buttonElement);
    expect(mockOnMouseEnter).toHaveBeenCalledTimes(2);

    await userEvent.unhover(buttonElement);
    expect(mockOnMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('renders with different variants', () => {
    render(<Button color={'red'}>Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('ui-bg-red-700');
  });

  it('renders with different sizes', () => {
    render(<Button size={'extraSmall'}>Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('ui-text-xs');
  });

  it('renders with different shapes', () => {
    render(<Button shape={'pill'}>Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('ui-rounded-full');
  });

  it('should forward ref to the DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Click Me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe('Click Me');
  });

  it('should forward ref to the correct element when `as="a"`', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <Button ref={ref} as="a" href="https://example.com">
        Link
      </Button>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    expect(ref.current?.href).toBe('https://example.com/');
    expect(ref.current?.textContent).toBe('Link');
  });

  it('should forward ref to the correct element when `as="input"`', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <Button ref={ref} as="input" type="submit">
        Submit
      </Button>,
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe('submit');
    expect(ref.current?.value).toBe('Submit');
  });
});

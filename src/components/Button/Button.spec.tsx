import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import { Button, type ButtonProps } from '@/components/Button';

const defaultProps: ButtonProps = {
  children: 'Button',
  size: 'default',
  variant: 'default',
  asChild: false,
  onClick: vi.fn(),
};

describe('Button', () => {
  it('should render', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Button {...defaultProps} disabled />);
    const buttonText = screen.getByText(/button/i);

    expect(buttonText).toBeInTheDocument();
  });

  it('should render with different variants', () => {
    const variant = 'outline';
    render(<Button {...defaultProps} variant={variant} />);
    const button = screen.getByRole('button');

    // Add appropriate checks for variant styles if applicable
    expect(button).toBeInTheDocument();
  });

  it('should render as a different element when asChild is true', () => {
    render(
      <Button asChild variant="link">
        <a href="https://withpulp.com/">Link Button</a>
      </Button>,
    );
    const linkButton = screen.getByRole('link');

    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute('href', 'https://withpulp.com/');
  });

  it('should allow for setting an optional disabled state', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button');

    expect(button).toHaveProperty('disabled');
  });

  it('should allow for setting an optional className property', () => {
    const customClass = 'test';
    render(<Button {...defaultProps} className={customClass} />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass(customClass);
  });

  it('should allow for setting an optional onClick function', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddPlayers from './AddPlayers.jsx';

describe('AddPlayers', () => {
  it('renders AddPlayers form and submits data with validation', () => {
    render(<AddPlayers />);

    const nameInput = screen.getByLabelText(/Name/i);
    const positionInput = screen.getByLabelText(/Position/i);
    const nationalityInput = screen.getByLabelText(/Nationality/i);
    const strengthInput = screen.getByLabelText(/Strength/i);
    const agilityInput = screen.getByLabelText(/Agility/i);
    const speedInput = screen.getByLabelText(/Speed/i);
    const submitButton = screen.getByText(/Submit/i);

    fireEvent.click(submitButton);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Position is required')).toBeInTheDocument();
    expect(screen.getByText('Nationality is required')).toBeInTheDocument();
    expect(screen.getByText('Strength is required')).toBeInTheDocument();
    expect(screen.getByText('Agility is required')).toBeInTheDocument();
    expect(screen.getByText('Speed is required')).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'BOD' } });
    fireEvent.change(positionInput, { target: { value: 'center' } });
    fireEvent.change(nationalityInput, { target: { value: 'Irish' } });
    fireEvent.change(strengthInput, { target: { value: '7' } });
    fireEvent.change(agilityInput, { target: { value: '8' } });
    fireEvent.change(speedInput, { target: { value: '7' } });

    fireEvent.click(submitButton);

    expect(screen.queryByText('Name is required')).toBeNull();
    expect(screen.queryByText('Position is required')).toBeNull();
    expect(screen.queryByText('Nationality is required')).toBeNull();
    expect(screen.queryByText('Strength is required')).toBeNull();
    expect(screen.queryByText('Agility is required')).toBeNull();
    expect(screen.queryByText('Speed is required')).toBeNull();
  });

  it('should error for negative numbers', () => {
    render(<AddPlayers />);

    const submitButton = screen.getByText(/Submit/i);

    const strengthInput = screen.getByLabelText(/Strength/i);

    fireEvent.change(strengthInput, { target: { value: '-7' } });

    fireEvent.click(submitButton);

    expect(
      screen.queryByText('Strength needs to be a postive number')
    ).toBeNull();
  });
});

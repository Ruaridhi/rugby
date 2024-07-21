import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopFive from './TopFive';
import useFetchPlayers from '../hooks/useFetchPlayers';

// Mock the useFetchPlayers hook
jest.mock('../hooks/useFetchPlayers');

describe('TopFive component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('displays loading message when loading', () => {
    useFetchPlayers.mockReturnValue({
      players: [],
      loading: true,
      error: null,
    });

    render(<TopFive />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    useFetchPlayers.mockReturnValue({
      players: [],
      loading: false,
      error: { message: 'Something went wrong' },
    });

    render(<TopFive />);
    expect(screen.getByText('Error: Something went wrong')).toBeInTheDocument();
  });

  it('displays player cards when data is loaded', () => {
    useFetchPlayers.mockReturnValue({
      players: [
        {
          name: 'Player One',
          position: 'Forward',
          nationality: 'Country A',
          profile: { strength: 90, agility: 85, speed: 88 },
        },
        {
          name: 'Player Two',
          position: 'Midfielder',
          nationality: 'Country B',
          profile: { strength: 80, agility: 88, speed: 85 },
        },
      ],
      loading: false,
      error: null,
    });

    render(<TopFive />);

    expect(screen.getByText('Player One')).toBeInTheDocument();
    expect(screen.getByText('Position: Forward')).toBeInTheDocument();
    expect(screen.getByText('Nationality: Country A')).toBeInTheDocument();
    expect(screen.getByText('Strength: 90')).toBeInTheDocument();
    expect(screen.getByText('Agility: 85')).toBeInTheDocument();
    expect(screen.getByText('Speed: 88')).toBeInTheDocument();

    expect(screen.getByText('Player Two')).toBeInTheDocument();
    expect(screen.getByText('Position: Midfielder')).toBeInTheDocument();
    expect(screen.getByText('Nationality: Country B')).toBeInTheDocument();
    expect(screen.getByText('Strength: 80')).toBeInTheDocument();
    expect(screen.getByText('Agility: 88')).toBeInTheDocument();
    expect(screen.getByText('Speed: 85')).toBeInTheDocument();
  });
});

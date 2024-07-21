import React from 'react';
import useFetchPlayers from '../hooks/useFetchPlayers';
import Loading from './Loading';
import Error from './Error';

export default function TopFive() {
  const { players, loading, error } = useFetchPlayers();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error msg={error.message} />;
  }

  return (
    <div className="p-6 flex flex-wrap justify-center gap-6">
      {players
        .sort((a, b) => b.profile.strength - a.profile.strength) // Sort players by strength (or other criteria)
        .map((player, index) => (
          <div key={player.name} className="flex items-start gap-4">
            {/* Position Badge */}
            <div className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white text-3xl font-bold rounded-full">
              {index + 1}
            </div>

            {/* Card Content */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
              <div className="bg-gray-800 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold">{player.name}</h2>

                <p className="text-sm mt-1">Position: {player.position}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Nationality: {player.nationality}
                </p>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Strength: {player.profile.strength}
                  </p>
                  <p className="text-gray-600">
                    Agility: {player.profile.agility}
                  </p>
                  <p className="text-gray-600">Speed: {player.profile.speed}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

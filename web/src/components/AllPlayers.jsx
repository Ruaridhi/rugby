import React from 'react';
import Loading from './Loading';
import Error from './Error';
import useFetchPlayers from '../hooks/useFetchPlayers';

export default function AllPlayers() {
  const { players, loading, error } = useFetchPlayers();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error msg={error.message} />;
  }

  return (
    <ul>
      {players?.map((player) => (
        <li>{player.name}</li>
      ))}
    </ul>
  );
}

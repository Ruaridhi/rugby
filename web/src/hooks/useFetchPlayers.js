import { useState, useEffect } from 'react';

export default function useFetchPlayers() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:5000/players');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setPlayers(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return { players, loading, error };
}

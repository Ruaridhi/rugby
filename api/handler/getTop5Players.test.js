import { getTop5Players } from './getTop5Players.js';

describe('getTop5Players', () => {
  const data = [
    {
      name: 'BOD',
      position: 'center',
      nationality: 'Irish',
      profile: {
        strength: 7,
        agility: 8,
        speed: 7,
      },
    },
    {
      name: 'top',
      position: 'erw',
      nationality: 'erkwe',
      profile: {
        strength: 5,
        agility: 3,
        speed: 3,
      },
    },
    {
      name: 'mid',
      position: 'forward',
      nationality: 'American',
      profile: {
        strength: 6,
        agility: 5,
        speed: 8,
      },
    },
    {
      name: 'low',
      position: 'defender',
      nationality: 'British',
      profile: {
        strength: 4,
        agility: 6,
        speed: 7,
      },
    },
    {
      name: 'average',
      position: 'winger',
      nationality: 'Canadian',
      profile: {
        strength: 5,
        agility: 5,
        speed: 5,
      },
    },
    {
      name: 'extra',
      position: 'goalie',
      nationality: 'Australian',
      profile: {
        strength: 3,
        agility: 4,
        speed: 2,
      },
    },
  ];

  it('should return up to 5 players', () => {
    const result = getTop5Players(data);
    expect(result).toHaveLength(5);
  });

  it('should return the players in descending order by the sum of speed, agility, and strength', () => {
    const result = getTop5Players(data);

    const calculateSum = (player) =>
      player.profile.speed + player.profile.agility + player.profile.strength;

    for (let i = 0; i < result.length - 1; i++) {
      const currentSum = calculateSum(result[i]);
      const nextSum = calculateSum(result[i + 1]);
      expect(currentSum).toBeGreaterThanOrEqual(nextSum);
    }
  });
});

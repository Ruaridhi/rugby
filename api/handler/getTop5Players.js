export function getTop5Players(players) {
  return players
    .sort((a, b) => {
      const sumA = a.profile.speed + a.profile.agility + a.profile.strength;
      const sumB = b.profile.speed + b.profile.agility + b.profile.strength;

      return sumB - sumA;
    })
    .slice(0, 5);
}

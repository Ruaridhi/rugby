export function validate(body) {
  if (!body.name) {
    return 'Missing name';
  }
  if (!body.position) {
    return 'Missing position';
  }
  if (!body.nationality) {
    return 'Missing nationality';
  }
  if (!body.profile.strength) {
    return 'Missing profile strength';
  }
  if (!body.profile.agility) {
    return 'Missing profile agility';
  }
  if (!body.profile.speed) {
    return 'Missing profile speed';
  }

  return null;
}

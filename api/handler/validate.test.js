import { validate } from './validate.js';

describe('validate', () => {
  it('should not error if all fields completed', () => {
    const data = {
      name: 'BOD',
      position: 'center',
      nationality: 'Irish',
      profile: {
        strength: 7,
        agility: 8,
        speed: 7,
      },
    };

    const result = validate(data);
    expect(result).toEqual(null);
  });

  it('should return error if one or more fields missing', () => {
    const data = {
      position: 'center',
      nationality: 'Irish',
      profile: {
        strength: 7,
        agility: 8,
        speed: 7,
      },
    };

    const result = validate(data);
    expect(result).toEqual('Missing name');
  });
});

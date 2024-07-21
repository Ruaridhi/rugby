import React, { useState } from 'react';

export default function AddPlayers() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    nationality: '',
    profile: {
      strength: 0,
      agility: 0,
      speed: 0,
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.profile) {
      setFormData({
        ...formData,
        profile: {
          ...formData.profile,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // const strength = parseInt(formData.profile.strength, 10);
  // const agility = parseInt(formData.profile.agility, 10);
  // const speed = parseInt(formData.profile.speed, 10);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.nationality)
      newErrors.nationality = 'Nationality is required';
    if (!formData.profile.strength) newErrors.strength = 'Strength is required';
    if (!formData.profile.agility) newErrors.agility = 'Agility is required';
    if (!formData.profile.speed) newErrors.speed = 'Speed is required';
    if (formData.profile.strength && isNaN(formData.profile.strength) && formData.profile.strength > 0)
      newErrors.strength = 'Strength must be a positive number';
    if (formData.profile.agility && isNaN(formData.profile.agility) && formData.profile.agility > 0)
      newErrors.agility = 'Agility must be a positive number';
    if (formData.profile.speed && isNaN(formData.profile.speed) && formData.profile.speed > 0)
      newErrors.speed = 'Speed must be a positive number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    fetch('http://localhost:5000/player', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        position: formData.position,
        nationality: formData.nationality,
        profile: {
          strength: parseInt(formData.profile.strength, 10),
          agility: parseInt(formData.profile.agility, 10),
          speed: parseInt(formData.profile.speed, 10),
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-200 shadow-md rounded-lg mt-8 border border-gray-600">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add a Player</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-800 font-bold mb-1">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-gray-800 font-bold mb-1"
          >
            Position:
          </label>
          <input
            id="position"
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {errors.position && (
            <span className="text-red-600 text-sm">{errors.position}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="nationality"
            className="block text-gray-800 font-bold mb-1"
          >
            Nationality:
          </label>
          <input
            id="nationality"
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {errors.nationality && (
            <span className="text-red-600 text-sm">{errors.nationality}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="strength"
            className="block text-gray-800 font-bold mb-1"
          >
            Strength:
          </label>
          <input
            id="strength"
            type="number"
            name="strength"
            value={parseInt(formData.profile.strength)}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {errors.strength && (
            <span className="text-red-600 text-sm">{errors.strength}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="agility"
            className="block text-gray-800 font-bold mb-1"
          >
            Agility:
          </label>
          <input
            id="agility"
            type="number"
            name="agility"
            value={formData.profile.agility}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {errors.agility && (
            <span className="text-red-600 text-sm">{errors.agility}</span>
          )}
        </div>
        <div>
          <label htmlFor="speed" className="block text-gray-800 font-bold mb-1">
            Speed:
          </label>
          <input
            id="speed"
            type="number"
            name="speed"
            value={formData.profile.speed}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          {errors.speed && (
            <span className="text-red-600 text-sm">{errors.speed}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

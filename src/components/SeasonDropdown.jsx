import React from 'react';

const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
  'None',
];

function SeasonDropdown({ selected, onChange }) {
  return (
    <select
      id="dropdown"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option className="dropdown-option" value="">Select a season</option>
      {seasons.map((season) => (
        <option key={season} value={season}>
          {season}
        </option>
      ))}
    </select>
  );
}

export default SeasonDropdown;

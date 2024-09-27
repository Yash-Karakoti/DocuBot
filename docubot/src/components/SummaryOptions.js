import React, { useState } from 'react';

function SummaryOptions({ onSelectOption }) {
  const [summaryType, setSummaryType] = useState('short');

  const handleOptionChange = (e) => {
    setSummaryType(e.target.value);
    onSelectOption(e.target.value);
  };

  return (
    <div>
      <select value={summaryType} onChange={handleOptionChange}>
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="detailed">Detailed</option>
      </select>
    </div>
  );
}

export default SummaryOptions;

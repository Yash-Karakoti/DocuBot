import React from 'react';

function ResultDisplay({ summary }) {
  return (
    <div>
      <h2>Summary</h2>
      {summary ? (
        <p>{summary}</p>
      ) : (
        <p>No summary available yet. Please upload a document and choose a summary type.</p>
      )}
    </div>
  );
}

export default ResultDisplay;

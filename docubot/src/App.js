import React, { useState } from 'react';
import './styles.css';
import UploadComponent from './components/UploadComponent';
import SummaryOptions from './components/SummaryOptions';
import ResultDisplay from './components/ResultDisplay';
import Spline from '@splinetool/react-spline';

function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [summaryType, setSummaryType] = useState('short');
  const [loading, setLoading] = useState(false);  // State for loader

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleSummaryOptionChange = (option) => {
    setSummaryType(option);
  };

  const generateSummary = () => {
    if (!file) {
      alert('Please upload a document!');
      return;
    }

    setLoading(true);  // Show loader while processing

    // Simulate backend processing delay with setTimeout
    setTimeout(() => {
      setSummary('This is a dummy summary based on the document and summary type.');
      setLoading(false);  // Hide loader after summary is ready
    }, 2000);
  };

  return (
    <div className="app-container">
      {/* Spline 3D Scene as a full-screen background */}
      <Spline scene="https://prod.spline.design/I3MVySC4jYXYpIEe/scene.splinecode" className="spline-background" />

      {/* Overlay card for DocuBot functionality */}
      <div className="overlay-card">
        <h2>DocuBot - Document Summarization Agent</h2>
        <UploadComponent onFileUpload={handleFileUpload} />
        <SummaryOptions onSelectOption={handleSummaryOptionChange} />
        <button onClick={generateSummary}>Generate Summary</button>
        {/* Display loader while generating summary */}
        {loading ? <div className="loader"></div> : <ResultDisplay summary={summary} />}
      </div>
    </div>
  );
}

export default App;

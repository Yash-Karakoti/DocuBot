import React, { useState } from 'react';

function UploadComponent({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    } else {
      alert("Please select a file.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf,.docx,.txt" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadComponent;

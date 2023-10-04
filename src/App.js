import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [loadedImage, setLoadedImage] = useState(null);

  const handleAnalyzeClick = () => {
    // Code to trigger image analysis goes here
    console.log("Image analysis triggered with URL: " + imageUrl);
  };

  const handleGenerateClick = () => {
    // Code to trigger image generation goes here
    console.log("Image generation triggered with prompt: " + imageUrl);
  };

  const handleFetchImageClick = () => {
    // Fetch the image using the provided URL
    if (imageUrl) {
      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setLoadedImage(url);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  };

  return (
    <div>
      <h1>Image Analysis and Generation</h1>
      <label htmlFor="imageUrl">Enter URL or Prompt:</label>
      <input
        type="text"
        id="imageUrl"
        placeholder="Enter URL or prompt here"
        style={{ width: '300px' }}
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAnalyzeClick}>Analyze Image</button>
      <button onClick={handleGenerateClick}>Generate Image</button>
      <button onClick={handleFetchImageClick}>Fetch Image</button>

      {/* Display the fetched image */}
      {loadedImage && (
        <div>
          <h2>Fetched Image</h2>
          <img src={loadedImage} alt="Fetched" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default App;

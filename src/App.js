import React from 'react';

function App() {
 const [imageUrl, setImageUrl] = useState('');
  
  const handleAnalyzeClick = () => {
    // Code to trigger image analysis goes here
    console.log("Image analysis triggered with URL: " + imageUrl);
  };

  const handleGenerateClick = () => {
    // Code to trigger image generation goes here
    console.log("Image generation triggered with prompt: " + imageUrl);
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
    </div>
  );
}

}

export default App;

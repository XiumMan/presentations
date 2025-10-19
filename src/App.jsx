import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Slideshow from './components/Slideshow';

function App() {
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  const handleSelectPresentation = (id) => {
    setSelectedPresentation(id);
  };

  const handleBack = () => {
    setSelectedPresentation(null);
  };

  return (
    <div className="app">
      {!selectedPresentation ? (
        <Home onSelectPresentation={handleSelectPresentation} />
      ) : (
        <Slideshow presentationId={selectedPresentation} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;

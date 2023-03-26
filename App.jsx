
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PhotoGallery from './PhotoGallery';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos${searchTerm ? `?title=${searchTerm}` : ''}`
      );
      setPhotos(response.data);
      setLoading(false);
    };
    fetchPhotos();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <SearchBar handleSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PhotoGallery photos={photos} />
      )}
    </div>
  );
};

export default App;

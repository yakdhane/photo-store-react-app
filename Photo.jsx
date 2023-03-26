
import React from 'react';

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.url} alt={photo.title} />
      <div className="photo-title">{photo.title}</div>
    </div>
  );
};

export default Photo;

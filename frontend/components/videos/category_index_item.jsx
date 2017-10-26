import React from 'react';
import VideoItem from './video_item';

const CategoryIndexItem = ({ category, videos }) => {
  const videoItems = videos.map((video) => {
    return (
      <li className="video-item"><VideoItem video={video} /></li>
    );
  });

  return (
    <div>
      <h1>{category.name}</h1>
      <ul className="single-category">
        {videoItems}
      </ul>
    </div>
  );
};

export default CategoryIndexItem;

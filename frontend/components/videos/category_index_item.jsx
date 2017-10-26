import React from 'react';
import VideoItem from './video_item';

const CategoryIndexItem = ({ category, videos }) => {
  const videoItems = videos.map((video) => {
    return (
      <li><VideoItem video={video} /></li>
    );
  });

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {videoItems}
      </ul>
    </div>
  );
};

export default CategoryIndexItem;

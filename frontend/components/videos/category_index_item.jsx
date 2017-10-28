import React from 'react';
import VideoItem from './video_item';

const CategoryIndexItem = ({ category, videos }) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoItem key={video.id} video={video} />
    );
  });

  return (
    <div className="single-category">
      <h1>{category.name}</h1>
      <ul className='video-row'>
        {videoItems}
      </ul>
    </div>
  );
};

export default CategoryIndexItem;

import React from 'react';
import VideoItem from './video_item';

const CategoryIndexItem = ({ category, videos }) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoItem video={video} />
    );
  });
  
};

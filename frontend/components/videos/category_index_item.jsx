import React from 'react';
import VideoItemContainer from './video_item_container';

const CategoryIndexItem = (props) => {
  debugger
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItemContainer key={video.id} video={video} />
    );
  });

  return (
    <div className="single-category">
      <h1 className={props.classTitle}>{props.category.name}</h1>
      <ul className="video-row">
        {videoItems}
      </ul>
    </div>
  );
};

export default CategoryIndexItem;

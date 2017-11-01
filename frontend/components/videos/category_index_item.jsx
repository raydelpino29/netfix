import React from 'react';
import VideoItemContainer from './video_item_container';

const CategoryIndexItem = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItemContainer key={video.id} video={video} />
    );
  });
  let categoryClass = "single-category"

  if (props.classTitle) {

    categoryClass = "single-category show"
  }
  if (!props.category) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className={categoryClass}>
        <h1 className={props.classTitle}>{props.category.name}</h1>
        <ul className="video-row">
          {videoItems}
        </ul>
      </div>
    );
  }
};

export default CategoryIndexItem;

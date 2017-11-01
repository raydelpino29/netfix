import React from 'react';
import VideoItemContainer from './video_item_container';
import Header from '../header/header';

const CategoryIndexItem = (props) => {
  let videoItems;
  if (props.myListVids) {
    videoItems = props.myListVids.map((video) => {
      return (
        <VideoItemContainer key={video.id} video={video} />
      );
    });
  } else {
    videoItems = props.videos.map((video) => {
      return (
        <VideoItemContainer key={video.id} video={video} />
      );
    });
  }
  let categoryClass = "single-category"
  let rowClass = "video-row"
  let headerClass;
  if (props.classTitle) {
    headerClass = "header-show"
    categoryClass = "single-category show"
    rowClass = "video-row-show"
  }
  if (!props.category) {
    return <h1>There are no videos here.</h1>
  } else {
    return (
      <div className={categoryClass}>
        <h1 className={props.classTitle}>{props.category.name}</h1>
        <ul className={rowClass}>
          {videoItems}
        </ul>
      </div>
    );
  }
};

export default CategoryIndexItem;

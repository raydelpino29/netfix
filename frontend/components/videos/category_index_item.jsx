import React from 'react';
import VideoItemContainer from './video_item_container';
import Header from '../header/header';

class CategoryIndexItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { display: false, video: null };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropdown (vid) {
    this.setState({ display: !this.state.display, video: vid });
  }

  handleSubmit() {

  }

  render () {
    let videoItems;
    if (this.props.myListVids) {
      videoItems = this.props.myListVids.map((video) => {
        return (
          <VideoItemContainer key={video.id} video={video} handleDropdown={this.handleDropdown} />
        );
      });
    } else {
      videoItems = this.props.videos.map((video) => {
        return (
          <VideoItemContainer key={video.id} video={video} category={this.props.category}
            classTitle={this.props.classTitle} handleDropdown={this.handleDropdown} />
        );
      });
    }
    let categoryClass = "single-category";
    let rowClass = "video-row";
    let headerClass;
    let vidDropdownClass = "video-dropdown";
    let dropDownInfo = { title: "", description: "", thumbnail_url: "" };
    let title = this.props.category.name;
    if (this.props.classTitle) {
      headerClass = "header-show"
      categoryClass = "single-category show"
      rowClass = "video-row-show"
    }
    if (this.props.category === "myList") {
      title = "My List";
    }
    if (!this.props.category) {
      return <h1>There are no videos here.</h1>
    } else {
      if (this.state.display) {
        dropDownInfo = this.state.video
        vidDropdownClass += " visible"
      }
      return (
        <div className={categoryClass}>
          <h1 className={this.props.classTitle}>{title}</h1>
          <ul className={rowClass}>
            {videoItems}
          </ul>
          <div className={vidDropdownClass}>
            <h1 className="video-title">{dropDownInfo.title}</h1>
            <img className="video-show-image" src={dropDownInfo.thumbnail_url} />
            <p className="video-description">{dropDownInfo.description}</p>
            <form onSubmit={this.handleSubmit}>
              <label>Write a Review</label>
              <textarea></textarea>
              <button>Submit Review</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default CategoryIndexItem;

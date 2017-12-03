import React from 'react';
import VideoItemContainer from './video_item_container';
import Header from '../header/header';
import ReviewFormContainer from './review_form_container';
import ReviewListContainer from './review_list_container';

class CategoryIndexItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { display: false, video: { id: null } };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown (vid, likes, dislikes, received) {
    debugger
    if (!received) {
      let video = Object.assign({}, vid, { likes }, { dislikes });
      this.setState({ display: !this.state.display, video });
    } else if (this.state.video.id === vid.id) {
      debugger
      let video = Object.assign({}, vid, { likes }, { dislikes });
      this.setState({ display: this.state.display, video });
    }
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
        let likes = 0;
        let disLikes = 0;
        Object.values(video.likes).forEach((like) => {
          if (like.like_status === 1) {
            likes += 1;
          } else if (like.like_status === 0) {
            disLikes += 1;
          }
        });
        return (
          <VideoItemContainer key={video.id} video={video} category={this.props.category}
            classTitle={this.props.classTitle} handleDropdown={this.handleDropdown} />
        );
      });
    }
    let divStyle;
    let containerClass = "dropdown-container";
    let categoryClass = "single-category";
    let rowClass = "video-row";
    let headerClass;
    let vidDropdownClass = "video-dropdown";
    let dropDownInfo = { title: "", description: "", thumbnail_url: "",
      id: null, likes: 0, dislikes: 0 };
    let title = this.props.category.name;
    if (this.props.classTitle) {
      headerClass = "header-show";
      categoryClass = "single-category show";
      rowClass = "video-row-show";
      containerClass = "dropdown-container-show"
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
        divStyle = {
          backgroundImage: 'url(' + dropDownInfo.thumbnail_url + ')'
        };
      }
      const currentCategory = this.props.category;
      return (
        <div className={categoryClass}>
          <h1 className={this.props.classTitle}>{title}</h1>
          <ul id={currentCategory.name} className={rowClass}>
            {videoItems}
          </ul>
          <div className={containerClass}>
            <div style={divStyle} className={vidDropdownClass}>
              <button className="close-menu" onClick={this.handleDropdown}>&times;</button>
              <h1>{dropDownInfo.title}</h1>
              <div className="video-description">{dropDownInfo.description}</div>
              <p><i className="likes">{dropDownInfo.likes}</i> Users have liked this video!</p>
              <p><i className="dislikes">{dropDownInfo.dislikes}</i> Users have disliked this video.</p>
              <ReviewListContainer videoId={this.state.video.id}/>
              <div className="gradient"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CategoryIndexItem;

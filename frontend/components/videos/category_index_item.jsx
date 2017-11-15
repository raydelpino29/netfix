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

  handleDropdown (vid) {
    this.setState({ display: !this.state.display, video: vid });
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
    let divStyle;
    let categoryClass = "single-category";
    let rowClass = "video-row";
    let headerClass;
    let vidDropdownClass = "video-dropdown";
    let dropDownInfo = { title: "", description: "", thumbnail_url: "", id: null };
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
        divStyle = {
          backgroundImage: 'url(' + dropDownInfo.thumbnail_url + ')'
        };
      }
      debugger
      return (
        <div className={categoryClass}>
          <h1 className={this.props.classTitle}>{title}</h1>
          <ul className={rowClass}>
            {videoItems}
          </ul>
          <div className="dropdown-gradient">
            <div style={divStyle} className={vidDropdownClass}>
              <h1 className="video-title">{dropDownInfo.title}</h1>
              <p className="video-description">{dropDownInfo.description}</p>
              <ReviewFormContainer videoId={this.state.video.id}/>
              <ReviewListContainer videoId={this.state.video.id}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CategoryIndexItem;

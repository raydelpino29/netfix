import React from 'react';
import VideoItemContainer from './video_item_container';
import Header from '../header/header';
import ReviewFormContainer from './review_form_container';
import ReviewListContainer from './review_list_container';

class CategoryIndexItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { display: false, video: { id: null } };
    this.itemStatus = null;
    this.likeStatus = null;
    this.processCreate = this.processCreate.bind(this);
    this.processDelete = this.processDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  processDelete (field, currentLike) {
    this.props.deleteLike(currentLike.id);
  }

  processCreate (field) {
    let like_status;
    like_status = field === 'like' ? 1 : 0;
    this.props.createLike({ user_id: this.props.currentUser.id,
      video_id: this.state.video.id, like_status });
  }

  handleAdd (e) {
    if (this.itemStatus) {
      let currentListItem;
      Object.values(this.props.myList).forEach((item) => {
        if (item.video_id === this.state.video.id) {
          currentListItem = item;
        }
      });
      this.props.deleteListItem(currentListItem.id);
      this.itemStatus = null;
    } else {
      this.props.createListItem({ user_id: this.props.currentUser.id,
        video_id: this.state.video.id });
      this.itemStatus = "added";
    }
  }

  handleLike(field) {
    if (this.likeStatus) { //if there is already a like or dislike, delete it on click
      let currentLike;
      const like = Object.values(this.props.likes).forEach((like) => {
        if (like.video_id === this.state.video.id && like.user_id === this.props.currentUser.id) {
          currentLike = like;
        }
      });
      this.likeStatus = null;
      this.processDelete(field, currentLike);
    } else {
      this.likeStatus = field;
      this.processCreate(field);
    }
  }

  handleDropdown (vid, likes, dislikes, likeStatus, myListStatus, received) {
    if (!received) {
      this.itemStatus = myListStatus;
      this.likeStatus = likeStatus;
      let video = Object.assign({}, vid, { likes }, { dislikes });
      this.setState({ display: !this.state.display, video });
    } else if (this.state.video.id === vid.id) {
      this.itemStatus = myListStatus;
      this.likeStatus = likeStatus;
      let video = Object.assign({}, vid, { likes }, { dislikes });
      this.setState({ display: this.state.display, video });
    }
  }

  render () {
    debugger
    let videoItems;
    if (this.props.myListVids) {
      videoItems = this.props.myListVids.map((video) => {
        return (
          <VideoItemContainer key={video.id} video={video}
            likeStatus={this.likeStatus} itemStatus={this.itemStatus}
            handleDropdown={this.handleDropdown} />
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
            likeStatus={this.likeStatus} itemStatus={this.itemStatus}
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
      let classLike;
      let classDislike;
      let classMyList;
      if (this.likeStatus === "like") {
        classLike = "icon fa fa-thumbs-o-up active-like";
        classDislike = "";
      } else if (this.likeStatus === "dislike") {
        classDislike = "icon fa fa-thumbs-o-down active-dislike";
        classLike = "";
      } else {
        classLike = "icon fa fa-thumbs-o-up";
        classDislike = "icon fa fa-thumbs-o-down";
      }
      if (this.itemStatus) {
        classMyList = "fa fa-check-circle active-add";
      } else {
        classMyList = "icon fa fa-plus-circle";
      }
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
              <div className="video-like-count">
                <p><i className="likes">{dropDownInfo.likes}</i> Users have liked this video!</p>
                <p><i className="dislikes">{dropDownInfo.dislikes}</i> Users have disliked this video.</p>
              </div>
              <div className="dropdown-functions">
                <i onClick={this.handleAdd} className={classMyList}></i>
                <i onClick={() => this.handleLike("like")} className={classLike}></i>
                <i onClick={() => this.handleLike("dislike")} className={classDislike}></i>
              </div>
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

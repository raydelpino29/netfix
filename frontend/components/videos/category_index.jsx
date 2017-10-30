import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
    this.props.fetchAllVideos();
    this.props.fetchAllLikes();
    this.props.fetchAllListItems();
  }

  render () {
    const categoryIndexItems = this.props.categories.map((category) => {
      const videos = this.props.videos.filter((video) => {
        if (video.category_id === category.id) {
          return video;
        }
      });
      return (
        <ul key={category.id}><CategoryIndexItem likes={this.props.likes} category={category}
          videos={videos} createLike={this.props.createLike} deleteLike={this.props.deleteLike}
          currentUser={this.props.currentUser} createListItem={this.props.createListItem}
          deleteListItem={this.props.deleteListItem} /></ul>
      );
    });

    return (
      <ul className="category-index">
        {categoryIndexItems}
      </ul>
    );
  }
}

export default CategoryIndex;

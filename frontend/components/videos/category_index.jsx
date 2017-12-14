import React from 'react';
import CategoryIndexItemContainer from './category_index_item_container';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
    this.props.fetchAllLikes();
    this.props.fetchAllListItems();
    this.props.fetchAllReviews();
  }

  render () {
    let categoryIndexItems = this.props.categories.map((category) => {
      const videos = this.props.videos.filter((video) => {
        if (video.category_id === category.id) {
          return video;
        }
      });
      return (
        <ul key={category.id}><CategoryIndexItemContainer category={category} videos={videos}  /></ul>
      );
    });

    if (this.props.listItems.length > 0) {
      const category = "myList"
      const items = new Set(this.props.listItems)
      const videos = this.props.videos.filter((video) => {
        if (items.has(video.id)) {
          return video;
        }
      })
      categoryIndexItems.unshift(
        <ul key={category.id}><CategoryIndexItemContainer category={category} videos={videos}  /></ul>
      )
    }

    return (
      <ul className="category-index">
        {categoryIndexItems}
      </ul>
    );
  }
}

export default CategoryIndex;

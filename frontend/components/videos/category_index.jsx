import React from 'react';
import CategoryIndexItem from './category_index_item';

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
    const categoryIndexItems = this.props.categories.map((category) => {
      const videos = this.props.videos.filter((video) => {
        if (video.category_id === category.id) {
          return video;
        }
      });
      return (
        <ul key={category.id}><CategoryIndexItem category={category} videos={videos}  /></ul>
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

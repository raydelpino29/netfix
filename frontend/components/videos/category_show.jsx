import React from 'react';
import CategoryIndexItemContainer from './category_index_item_container';
import HeaderContainer from '../header/header_container';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllVideos().then(this.props.fetchAllListItems);
    if (this.props.match.params.categoryId && this.props.match.params.categoryId !== "myList") {
      this.props.fetchCategory(this.props.catId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.categoryId !== "myList")
      if (newProps.match.params.categoryId !== this.props.match.params.categoryId) {
        this.props.fetchCategory(newProps.catId);
      }
  }

  render () {
    if (this.props.videos.length === 0) {
      return (
        <div>
          <h1 className="no-vids">No Videos...Yet!</h1>
        </div>
      )
    }
    return (
      <div>
        <CategoryIndexItemContainer classTitle="category-show-title" videos={this.props.videos}
          myListVids={this.props.myListVids} category={this.props.category} />
      </div>
    )
  }
}

export default CategoryShow;

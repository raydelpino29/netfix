import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllVideos();
    this.props.fetchCategory(this.props.catId);
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (newProps.match.params.categoryId !== this.props.match.params.categoryId) {
      this.props.fetchCategory(newProps.catId);
    }
  }

  render () {
    if (this.props.videos.length === 0) {
      return <h1>Loading</h1>
    }
    return <CategoryIndexItem videos={this.props.videos} category={this.props.category} />
  }
}

export default CategoryShow;

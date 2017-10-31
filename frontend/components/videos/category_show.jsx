import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.catId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.categoryId !== this.props.match.params.categoryId) {
      this.props.fetchCategory(newProps.catId);
    }
  }

  render () {
    if (!this.props.video) {
      return <h1>Loading</h1>
    }
    <CategoryIndexItem videos={this.props.videos} category={this.props.category} />
  }
}

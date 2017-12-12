import React from 'react';
import  HeaderContainer  from './header_container';
import  CategoryIndexItemContainer  from '../videos/category_index_item_container';

class SearchPage extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    let id = this.props.match.params ? this.props.match.params.categoryId : null;
    let query = this.props.location.search.slice(1);
    this.props.searchVideos(query, id);
  }

  componentWillReceiveProps (newProps) {
    let id = this.props.match.params ? this.props.match.params.categoryId : null;
    let query = newProps.location.search.slice(1);
    if (newProps.location.search !== this.props.location.search) {
      this.props.searchVideos(query, id);
    }
  }

  render () {
    let category = { name: "Search" };
    let vids;
    vids = this.props.searchedVids ? this.props.searchedVids : [];
    return (
      <div>
        <CategoryIndexItemContainer videos={vids} classTitle="category-show-title" category={category} />
      </div>
    )
  }
}

export default SearchPage;

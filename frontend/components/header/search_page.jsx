import React from 'react';
import  HeaderContainer  from './header_container';
import  CategoryIndexItemContainer  from '../videos/category_index_item_container';

class SearchPage extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    let query = this.props.location.search.slice(1)
    this.props.searchVideos(query);
  }

  componentWillReceiveProps (newProps) {
    let query = newProps.location.search.slice(1)
    if (newProps.location.search !== this.props.location.search) {
      this.props.searchVideos(query);
    }
  }

  render () {
    let category = { name: "Search" };
    let vids;
    this.props.searchedVids ? vids = this.props.searchedVids : vids = [];
    return (
      <div>
        <CategoryIndexItemContainer videos={vids} classTitle="category-show-title" category={category} />
      </div>
    )
  }
}

export default SearchPage;

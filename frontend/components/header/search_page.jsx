import React from 'react';
import  HeaderContainer  from './header_container';
import  CategoryIndexItemContainer  from '../videos/category_index_item_container';

class SearchPage extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.searchVideos(this.props.location.search.slice(1));
  }

  componentWillReceiveProps (newProps) {
    if (newProps.location.search !== this.props.location.search) {
      this.props.searchVideos(newProps.location.search.slice(1));
    }
  }

  render () {
    let category = { name: "Search" };
    let vids;
    this.props.searchedVids ? vids = this.props.searchedVids : vids = [];
    return (
      <div>
        <HeaderContainer classIndicator="videos" location={this.props.location} history={this.props.history} />
        <CategoryIndexItemContainer videos={vids} classTitle="category-show-title" category={category} />
      </div>
    )
  }
}

export default SearchPage;

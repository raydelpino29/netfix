import React from 'react';
import  HeaderContainer  from './header_container';
import  CategoryIndexItemContainer  from '../videos/category_index_item_container';

class SearchPage extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.searchVideos(this.props.location.query.q);
  }

  componentWillReceiveProps (newProps) {
    debugger
    if (newProps.location.query.q !== this.props.location.query.q) {
      this.props.searchVideos(this.props.location.query.q);
    }
  }

  render () {
    debugger
    let vids;
    this.props.searchedVids ? vids = this.props.searchedVids : vids = [];
    return (
      <div>
        <HeaderContainer location={this.props.location} history={this.props.history} />
        <CategoryIndexItemContainer classTitle="category-show-title" videos={this.props.searchedVids} />
      </div>
    )
  }
}

export default SearchPage;

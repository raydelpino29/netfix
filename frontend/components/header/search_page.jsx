import React from 'react';
import  HeaderContainer  from './header_container';
import  CategoryIndexItemContainer  from '../videos/category_index_item_container';

class SearchPage extends React.Component {

  constructor (props) {
    super(props);
  }

  // componentWillMount () {
  //   debugger
  //   this.props.searchVideos(this.props.location.search.slice(1));
  // }

  componentDidMount() {
    debugger
    this.props.searchVideos(this.props.location.search.slice(1));
  }

  componentWillReceiveProps (newProps) {
    debugger
    if (newProps.location.search !== this.props.location.search) {
      this.props.searchVideos(this.props.location.search.slice(1));
    }
  }

  render () {
    let category = { name: "Search" };
    let vids;
    this.props.searchedVids ? vids = this.props.searchedVids : vids = [];
    debugger
    return (
      <div>
        <HeaderContainer location={this.props.location} history={this.props.history} />
        <CategoryIndexItemContainer classTitle="category-show-title" videos={vids}
          category={category} />
      </div>
    )
  }
}

export default SearchPage;

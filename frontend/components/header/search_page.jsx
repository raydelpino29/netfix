import React from 'react';

class SearchPage extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.searchVideos(this.props.location.query.q);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.location.query.q !== this.props.location.query.q) {
      this.props.searchVideos(this.props.location.query.q);
    }
  }

  render () {
    return (
      <div>
        <CategoryIndexItemContainer classTitle="category-show-title" videos={this.props.searchedVids} />
      </div>
    )
  }
}

export default SearchPage

import React from 'react';

class SearchInput extends React.Component {

  constructor (props) {
    super(props);
    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    document.getElementById('search-bar').select();
    if (this.props.location.search !== "") {
      this.setState({ search: this.props.location.search.slice(1)});
    }
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.location.pathname.includes("/search")) {
      this.setState({ search: "" });
    }
  }


  changeQuery (input) {
    if (this.state.search !== "") {
      if (this.props.location.pathname.includes("/category")) {
        this.props.history.push(`/category/${this.props.location.pathname.slice(10).split("/")[0]}/search?${this.state.search}`);
      } else {
        this.props.history.push(`/search?${this.state.search}`);
      }
    } else {
      this.props.history.push("/");
    }
  }

  typingTimer (input) {
    setTimeout(() => this.changeQuery(input), 200);
  }

  handleChange (e) {
    this.setState({ search: e.target.value });
    clearTimeout(this.typingTimer);
    this.typingTimer();
  }

  render () {
    return (
      <div className="search-input">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input id="search-bar" placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default SearchInput

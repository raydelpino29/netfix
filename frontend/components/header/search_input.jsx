import React from 'react';

class SearchInput extends React.Component {

  constructor (props) {
    super(props);
    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    if (this.state.search !== "") {
      this.setState({ search: this.props.search.slice(1) });
    }
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.location.pathname.includes("search")) {
      this.setState({ search: "" });
    }
  }

  handleChange (e) {
    debugger
    this.setState({ search: e.target.value }, () => {
        if (this.state.search !== "") {
          this.props.history.push(`/search?${this.state.search}`);
        } else {
          this.props.history.push("/");
        }
      }
     );
  }

  render () {
    return (
      <div className="search-input">
        <input placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default SearchInput

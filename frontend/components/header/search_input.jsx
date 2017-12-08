import React from 'react';
import { hashHistory } from 'react-router';

class SearchInput extends React.Component {

  constructor (props) {
    super(props);
    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    if (this.state.search !== "") {
      this.setState({ search: this.props.location.query.q });
  }

  componentWillReceiveProps (newProps) {
    if (!this.props.location.pathname.includes("search")) {
      this.setState({ search: "" });
    }
  }

  handleChange (e) {
    this.setState({ search: e.target.value });
    if (this.state.search !== "") {
      hashHistory.push(`/search/q=${this.state.search}`);
    } else {
      hashHistory.push("/");
    }
  }

  render () {
    <div>
      <input placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
    </div>
  }
}

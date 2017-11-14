import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { body: "", videoId: this.props.videoId, userId: this.props.currentUser.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps (newProps) {
    debugger
    this.setState({ videoId: newProps.videoId });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit () {
    debugger
    this.props.createReview(this.state);
  }

  render () {
    debugger
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Write a Review
          <textarea onChange={this.handleChange} value={this.state.body} />
        </label>
        <button>Submit Review</button>
      </form>
    )
  }
}


export default ReviewForm;

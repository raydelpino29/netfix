import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    debugger
    this.state = { body: "", video_id: this.props.videoId, user_id: this.props.currentUser.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit () {
    this.props.createReview(this.state);
  }

  render () {
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

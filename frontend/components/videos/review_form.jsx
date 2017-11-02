import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { body: "", video_id: this.props.videoId, user_id: this.props.currentUser.id };
  }

  handleChange(e) {
    this.setState({ body: e.target.value }); //why is e.target undefined?
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

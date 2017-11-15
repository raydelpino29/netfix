import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { body: "", videoId: this.props.videoId, userId: this.props.currentUser.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps (newProps) {
    this.setState({ videoId: newProps.videoId });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit () {
    this.props.createReview(this.state);
    this.setState({ body: "", videoId: this.props.videoId, userId: this.props.currentUser.id });
  }

  render () {

    return (
        <form className="write-review" onSubmit={this.handleSubmit}>
          <label htmlFor="review-body">Write a Review</label>
          <textarea  className="review-body" onChange={this.handleChange} value={this.state.body} />
          <button>Submit</button>
        </form>
    )
  }
}


export default ReviewForm;

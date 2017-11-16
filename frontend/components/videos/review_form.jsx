import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { body: "", videoId: this.props.videoId, userId: this.props.currentUser.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (!this.state.videoId) {
      this.setState({ videoId: newProps.videoId });
    } else {
      this.setState({ body: newProps.review.body });
    }
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleCreate () {
    this.props.createReview(this.state);
    this.setState({ body: "", videoId: this.props.videoId, userId: this.props.currentUser.id });
  }

  handleUpdate () {
    this.props.updateReview(this.state);
    this.setState({ body: "", videoId: this.props.videoId, userId: this.props.currentUser.id });
  }

  render () {
    if (this.props.formType === "create") {
      return (
        <form className="write-review" onSubmit={this.handleCreate}>
          <label htmlFor="review-body">Write a Review</label>
          <textarea placeholder="Did you enjoy this video?" className="review-body" onChange={this.handleChange} value={this.state.body} />
          <button>Submit</button>
        </form>
      )
    } else if (this.props.formType === "edit") {
      return (
        <form className="write-review" onSubmit={this.handleUpdate}>
          <label htmlFor="review-body">Write a Review</label>
          <textarea placeholder="Did you enjoy this video?" className="review-body" onChange={this.handleChange} value={this.state.body} />
          <button>Update</button>
        </form>
      )
    }
  }
}


export default ReviewForm;

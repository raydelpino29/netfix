import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { body: "" , videoId: this.props.videoId, userId: this.props.currentUser.id };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.editForm = true;
  }

  componentWillReceiveProps (newProps) {
    if (!this.state.videoId) {
      this.setState({ videoId: newProps.videoId });
    } else if (newProps.videoId !== this.props.videoId) { //we are opening the dropdown at a new video, and don't want to remember the last video's review info
      this.editForm = false;
      this.setState({ body: "", id: undefined, videoId: newProps.videoId });
    } else if (newProps.review) {
      this.editForm = true;
      this.setState({ body: newProps.review.body, id: newProps.review.id });
    }
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleCreate (e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.setState({ body: "" });
  }

  handleUpdate (e) {
    e.preventDefault();
    this.props.updateReview(this.state);
    this.editForm = false;
    this.setState({ body: "" , videoId: this.props.videoId, userId: this.props.currentUser.id });
  }

  render () {
    if (this.props.formType === "create" || !this.editForm) {
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

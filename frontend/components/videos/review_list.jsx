import React from 'react';
import ReviewFormContainer from './review_form_container';

class ReviewList extends React.Component {

  constructor (props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = { review: undefined, videoId: this.props.videoId };
  }

  componentWillReceiveProps (newProps) {
    if (newProps !== this.props) {
      this.setState({ videoId: newProps.videoId });
    }
  }

  handleEdit(review) {
    this.setState({ review: review });
  }

  handleDelete(id) {

  }

  render () {
    const reviewList = this.props.reviews.map((review) => {
      if (review.user_id === this.props.currentUser.id) {
        return (
          <li key={review.id}>
            <p>{review.body}</p>
            <button onClick={() => this.handleEdit(review)}>Edit</button>
            <button onClick={() => this.handleDelete(review.id)}>Delete</button>
          </li>
        )
      }
      return (
        <li key={review.id}>
          <p>{review.body}</p>
        </li>
      );
    });
    if (reviewList.length === 0) {
      return (
        <div className="list-div">
          <ReviewFormContainer videoId={this.state.videoId} review={this.state.review}/>
          <label htmlFor="review-list">Reviews</label>
          <ul className="review-list">
            <p>No Reviews Yet!</p>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="list-div">
          <ReviewFormContainer videoId={this.state.videoId} review={this.state.review}/>
          <ul className="review-list">
            {reviewList}
          </ul>
        </div>
      );
    }
  }
}

export default ReviewList;

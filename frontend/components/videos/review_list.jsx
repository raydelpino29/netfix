import React from 'react';

class ReviewList extends React.Component {

  render () {
    const reviewList = this.props.reviews.map((review) => {
      return (
        <li key={review.id}>
          <p>{review.body}</p>
        </li>
      );
    });
    if (reviewList.length === 0) {
      return (
        <div className="list-div">
          <label htmlFor="review-list">Reviews</label>
          <ul className="review-list">
            <p>No Reviews Yet!</p>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="list-div">
          <label htmlFor="review-list">Reviews</label>
          <ul className="review-list">
            {reviewList}
          </ul>
        </div>
      );
    }
  }
}

export default ReviewList;

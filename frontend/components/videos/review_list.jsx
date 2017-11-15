import React from 'react';

class ReviewList extends React.Component {

  render () {
    const reviewList = this.props.reviews.map((review) => {
      return (
        <li>
          <p>{review.body}</p>
        </li>
      );
    });
    return (
      <ul className="review-list">
        {reviewList}
      </ul>
    );
  }
}

export default ReviewList;

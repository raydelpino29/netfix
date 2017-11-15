import React from 'react';

class ReviewList extends React.Component {

  render () {
    const reviewList = this.props.reviews.map((review) => {
      <li>
        <p>review.body</p>
      </li>
    });
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
}

export default ReviewList;

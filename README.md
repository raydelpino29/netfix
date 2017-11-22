[live site](http://www.netfixing.com/)

## Main Features

  - Authentication
  
  ![screen shot 2017-11-03 at 9 23 57 am](https://user-images.githubusercontent.com/29177545/32375859-8b0d23bc-c079-11e7-9c97-ddb4875d0bab.png)

After passing through the initial landing page, the user is directed to this login/sign up page, where they can input their email and password to gain access to the site. They are able to switch between login/sign up form with a link on the bottom of the form. The proper errors appear on the top of the form if incorrect information is entered or info is left out.

  - Like/Dislike/Saving Videos

  ![screen shot 2017-11-21 at 2 57 24 pm](https://user-images.githubusercontent.com/29177545/33093969-8cb7ce5e-cecc-11e7-96e5-004998113f5e.png)

Users are able to like, dislike, and save videos to their personal list (My List). On hover of the video, the like/dislike buttons dynamically change classes to indicate the like/add status. A user's list can be seen by using the Browse menu.

- Browse

![screen shot 2017-11-20 at 12 22 15 pm](https://user-images.githubusercontent.com/29177545/33031916-9dca507a-cded-11e7-97a9-b8b325e8fc04.png)

Hovering over the Browse within the header will produce a dropdown, which gives the user access to all of the video categories, as well as their personal list.

- Tricky Code Implementation

In my effort to use each React component to their full potential, rather than needlessly creating new React components, I re-purposed the same components depending on what props they were being given. Since a user's "My List" page was similar to the Category Show pages , I recycled my Category Show component for the user's personal list. However, this component is also being used for every video category. In order for the component to be aware of what category it was rendering, or if it was actually a personal list, it had to be conditionally passed props to indicate such.

If the pathname was "/myList", then it would know to pass down the user's personal videos to be rendered. Otherwise, it would take the category ID from the pathname and pass down all the corresponding videos for that category:

```javascript
const mapStateToProps = (state, ownProps) => {
  let catId = ownProps.match.params.categoryId;
  let category;
  if (ownProps.location.pathname === "/myList") {
    category = "myList";
  } else {
    category = state.entities.categories[ownProps.match.params.categoryId];
  }
  let videos;
  if (ownProps.location.pathname === "/myList") {
    videos = Object.values(state.entities.myList).map((item) => {
      return state.entities.videos[item.video_id];
    });
  } else {
    videos = Object.values(state.entities.videos).filter((video) => {
      if (video.category_id === parseInt(catId)) {
        return video;
      }
    });
  }
  return {
    categories: state.entities.categories,
    category,
    videos,
    catId,
  };
};
```


## Future Feature and Implementation

  - Reviewing Videos

   Netflix, though it may not be apparent, allows users review videos. I plan on implementing this feature by adding a dropdown menu that    includes a review form, which creates a review when submitted. I will also have other users' reviews on that menu, and allow for a user    to delete their own reviews.

  - Search Feature

   Netflix, though it may not be apparent, allows users review videos. I plan on implementing this feature by adding a dropdown menu that    includes a review form, which creates a review when submitted. I will also have other users' reviews on that menu, and allow for a user    to delete their own reviews.

  - Search Feature

   Netflix has a search feature that shows all videos that relate to your search on every key stroke. I plan to implement this using an OnChange event handler that will render a page of videos whose title includes the letters entered into the input field.

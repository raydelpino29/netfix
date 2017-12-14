[live site](http://www.netfixing.com/)

## Main Features

  - Authentication
  
  ![screen shot 2017-11-03 at 9 23 57 am](https://user-images.githubusercontent.com/29177545/32375859-8b0d23bc-c079-11e7-9c97-ddb4875d0bab.png)

After passing through the initial landing page, the user is directed to this login/sign up page, where they can input their email and password to gain access to the site. They are able to switch between login/sign up form with a link on the bottom of the form. The proper errors appear on the top of the form if incorrect information is entered or info is left out.



 
  - Like/Dislike/Save Videos

  ![screen shot 2017-11-21 at 2 57 24 pm](https://user-images.githubusercontent.com/29177545/33093969-8cb7ce5e-cecc-11e7-96e5-004998113f5e.png)

Users are able to like, dislike, and save videos to their personal list (My List). On hover of the video, the like/dislike buttons dynamically change classes to indicate the like/add status. A user's list can be seen by using the Browse menu.




- Browse

![screen shot 2017-11-20 at 12 22 15 pm](https://user-images.githubusercontent.com/29177545/33031916-9dca507a-cded-11e7-97a9-b8b325e8fc04.png)

Hovering over the Browse within the header will produce a dropdown, which gives the user access to all of the video categories, as well as their personal list.




- Search Videos (site-wide or within scope of category)

![screen shot 2017-12-14 at 12 41 18 pm](https://user-images.githubusercontent.com/29177545/34006402-332107fe-e0cc-11e7-8f16-900d28176595.png)

Typing into the search bar will send a request with every key stroke. The request triggers an ActiveRecord query that sanitizes user input, protecting from SQL injection, and return all videos whose title includes the user input. If the user is already browsing videos within a category page, the search bar will only return videos within the scope of that category.

There was some tricky implementation with this component when taking into account a user who typed really fast. In this case, the search page's willReceiveProps lifecycle method wouldn't sense that it's newProps search query was different from it's current props query. The first letter triggered a query, but the user typed other letters before the initial videos reached the front end. I solved this issue by waiting until the user stopped typing to trigger a query. This fired far less requests, making the search bar a less expensive component, and guaranteed the correct videos to appear on the search page.


Search Bar Component:
```javascript
changeQuery (input) {
  if (this.state.search !== "") {
    if (this.props.location.pathname.includes("/category")) {
      this.props.history.push(`/category/${this.props.location.pathname.slice(10).split("/")[0]}/search?${this.state.search}`);
    } else {
      this.props.history.push(`/search?${this.state.search}`);
    }
  } else {
    this.props.history.push("/");
  }
}

typingTimer (input) {
  setTimeout(() => this.changeQuery(input), 200);
}

handleChange (e) {
  this.setState({ search: e.target.value });
  clearTimeout(this.typingTimer);
  this.typingTimer();
}
```

Search Page Component:
```javascript
componentDidMount() {
  let id = this.props.match.params ? this.props.match.params.categoryId : null;
  let query = this.props.location.search.slice(1);
  this.props.searchVideos(query, id);
}

componentWillReceiveProps (newProps) {
  let id = this.props.match.params ? this.props.match.params.categoryId : null;
  let query = newProps.location.search.slice(1);
  if (newProps.location.search !== this.props.location.search) {
    this.props.searchVideos(query, id);
  }
}
```




- Review Videos

![screen shot 2017-12-14 at 1 18 38 pm](https://user-images.githubusercontent.com/29177545/34007891-725db8e0-e0d1-11e7-8055-c60dc0bcbb12.png)

Every video item has a button that will render a dropdown with its information, as well as a review form that allows users to edit and create reviews. There is also a review list that enables users to render the edit form or delete a review.

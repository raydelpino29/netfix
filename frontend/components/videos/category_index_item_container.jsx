import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createListItem, deleteListItem } from '../../actions/my_list_actions';
import CategoryIndexItem from './category_index_item';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    likes: Object.values(state.entities.likes),
    myList: Object.values(state.entities.myList),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    createListItem: (item) => dispatch(createListItem(item)),
    deleteListItem: (id) => dispatch(deleteListItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndexItem);

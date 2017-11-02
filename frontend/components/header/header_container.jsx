import { connect } from 'react-redux';
import Header from './header';
import { fetchAllCategories } from '../../actions/video_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    categories: state.entities.categories,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

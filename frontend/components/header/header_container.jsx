import { connect } from 'react-redux';
import Header from './header';
import { fetchAllCategories } from '../../actions/video_actions';

const mapStateToProps = (state) => {
  return {
    categories: state.entities.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

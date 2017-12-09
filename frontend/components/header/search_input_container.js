import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.entities.categories,
    currentUser: state.session.currentUser,
    headerClass,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

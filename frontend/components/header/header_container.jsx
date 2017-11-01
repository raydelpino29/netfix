import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    categories: state.entities.categories
  };
};

export default connect(mapStateToProps, null)(Header);

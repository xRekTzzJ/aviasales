import { connect } from 'react-redux';

import classes from '../../index.module.scss';
import * as actions from '../actions/actions';

const TabButton = ({ title, name, tabButtonAction, activeTabButton }) => {
  const onButtonClick = () => {
    tabButtonAction(name);
  };
  let styles =
    activeTabButton === name
      ? `${classes['tabs__button']} ${classes['tabs__button_active']}`
      : `${classes['tabs__button']}`;

  return (
    <button className={styles} onClick={onButtonClick}>
      {title}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTabButton: state.activeTabButton,
  };
};

export default connect(mapStateToProps, actions)(TabButton);

import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return message && <p className={css.notify_message}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;

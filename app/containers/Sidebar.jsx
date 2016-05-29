import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/sidebar';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('sidebar')}>
      <h3 className={cx('header')}>Sidebar</h3>

      <div className={cx('content')}>
        <p>This is some text.</p>
        <div className={cx('sponsors')}>
          <img src="http://placehold.it/200x130" />
          <img src="http://placehold.it/200x130" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

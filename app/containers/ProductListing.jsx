import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/product-listing';

const cx = classNames.bind(styles);

const ProductListing = () => {
  return (
    <div className={cx('products')}>
      <h1 className={cx('header')}>Product Listing</h1>
      <div className={cx('listing')}>
        .listing
      </div>
    </div>
  );
};

export default ProductListing;

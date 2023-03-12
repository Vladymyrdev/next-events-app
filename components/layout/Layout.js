import React, { Fragment } from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
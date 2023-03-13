import NotificationContext from '@/store/notification-context';
import { Fragment, useContext } from 'react';
import Notification from '../ui/notification';
import Header from './Header';

function Layout({ children }) {
  const { notification } = useContext(NotificationContext);

  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;

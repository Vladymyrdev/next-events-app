import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return <button onClick={onClick}>{children}</button>;
}

export default Button;

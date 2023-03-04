import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({logoutHandeler}) => {
    return (
        <div className={styles.navbarBox}>
            <div className={styles.child1}>Milad</div>
            <div onClick={logoutHandeler} className={styles.child2}>Logout</div>
        </div>
    );
};

export default Navbar;
import React from "react";
import styles from './Header.module.scss';
import headerimg from "../../assets/Group.png";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className={styles.headerContainer}>
      <img src={headerimg} alt="img" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Header;

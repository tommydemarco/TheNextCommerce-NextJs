import styles from "./TheMenu.module.scss";
import Link from "next/link";
import { Icon } from "semantic-ui-react";

const links = ["Link 1", "Link 2", "Link 3"];

const TheMenu = () => {
  return (
    <div className={styles.TheMenu}>
      <nav className={styles.TheMenu__container}>
        <ul className={styles.TheMenu__links}>{renderMenuLinks(links)}</ul>
        <ul className={styles.TheMenu__icons}>
          <Icon className={styles.TheMenu__icon} name="sign-in" size="large" />
          <Icon
            className={styles.TheMenu__icon}
            name="shopping cart"
            size="large"
          />
        </ul>
      </nav>
    </div>
  );
};

const renderMenuLinks = (links) => {
  return links.map((link) => {
    return (
      <li className={styles.TheMenu__element}>
        <Link href="/">
          <a className={styles.TheMenu__link}>{link}</a>
        </Link>
      </li>
    );
  });
};

export default TheMenu;

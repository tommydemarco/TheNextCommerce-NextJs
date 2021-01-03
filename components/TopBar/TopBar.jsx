import Link from "next/link";
import { Input, Dropdown } from "semantic-ui-react";

import styles from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.TopBar}>
      <div className={styles.TopBar__container}>
        <Link href="/">
          <a className={styles.TopBar__logo}>The Next Commerce</a>
        </Link>
        <div className={styles.TopBar__search}>
          <InputSearch />
        </div>
      </div>
    </div>
  );
};

const InputSearch = () => {
  const options = [
    { key: "page", text: "This Page", value: "page" },
    { key: "org", text: "This Organization", value: "org" },
    { key: "site", text: "Entire Site", value: "site" },
  ];

  return <Input action="Search" placeholder="Search..." />;
};

export default TopBar;

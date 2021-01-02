import { Container } from "semantic-ui-react";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Container fluid className={styles.Layout}>
      <Container className={styles.Layout__content}>{children}</Container>
    </Container>
  );
};

export default Layout;

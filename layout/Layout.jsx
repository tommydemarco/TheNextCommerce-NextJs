import { Container } from "semantic-ui-react";

import TheHeader from "../components/TheHeader";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Container fluid className={styles.Layout}>
      <TheHeader />
      <Container className={styles.Layout__content}>{children}</Container>
    </Container>
  );
};

export default Layout;

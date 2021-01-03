import { Container } from "semantic-ui-react";

import TopBar from "../TopBar";
import TheMenu from "../TheMenu";

const TheHeader = () => {
  return (
    <Container fluid>
      <TopBar />
      <TheMenu />
    </Container>
  );
};

export default TheHeader;

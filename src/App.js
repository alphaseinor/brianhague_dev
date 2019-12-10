import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { NavList } from './components/nav/NavList';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavList />
        </Col>
      </Row>
      <Row>
        <Col xs="auto">One day, you'll see content here... for now I don't have enough time to show off my work, because of work</Col>
      </Row>
    </Container>
  );
}

export default App;

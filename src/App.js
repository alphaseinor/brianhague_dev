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
        <Col xs="auto">content</Col>
      </Row>
    </Container>
  );
}

export default App;

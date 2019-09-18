import React from "react";
import { Badge, Card, Container, Col, Row } from "react-bootstrap";

function layout(props) {
  return (
    <div style={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
        <Container>
            <Row >
      <Badge style={{width: '1050px'}} variant="primary">{props.title}</Badge>
      </Row>

      <Row>
          <Col md={{ span: 11, offset:0 }}>
      <Card>
        <Card.Body style={{ marginBottom: '50px'}}>{props.body}</Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
}
export default layout;

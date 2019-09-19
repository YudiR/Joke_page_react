import React from "react";
import { Badge, Card, Container, Col, Row } from "react-bootstrap";

function layout(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container>
        <Row>
            <Col md={{ span: 12, offset: 0 }}>
          <h1>
          {/* style={{ width: "1050px" }} */}
            <Badge variant="primary">
              {props.title}
            </Badge>
          </h1>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 11, offset: 0 }}>
            <Card>
              <h3>
                <Card.Body style={{ marginBottom: "50px" }}>
                  {props.body}
                </Card.Body>
              </h3>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default layout;
